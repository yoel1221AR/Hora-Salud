import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TableEvent, ActionActive } from '../table/Itable';
import { TransformDataTablePipe } from '../../services/transform.service';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent {
  keyColumns : string[] = [];
  tableHeads : any;
  data !: any;
  @Input() set dataCard(data : any){
    if(data){
      this.data = data;
      this.keyColumns = [];
      this.states = [];
      this.setTableHeads();
      this.setInfoCard();   
    }
  }
  @Input() actions : string[] = [];
  @Input() keyTranslate !: string;
  @Output() action : EventEmitter<TableEvent> = new EventEmitter<TableEvent>();
  @Input() actionsIf : ActionActive[] = [];

  primaryInfo : string[] = [];
  secondaryInfo : Array<string[]> = [];
  datesInfo : string[] = [];
  states : string[] = [];


  constructor(
    private translate : TranslateService,
    private transform : TransformDataTablePipe
  ){ }


  private setTableHeads() : any {
    let singleData = this.data[0];
    let heads : any = {};

    for(const key in singleData){
      const translate = this.getTranslate(key);
      if(translate){
        this.keyColumns.push(key);
        heads[key] = translate;
      }
    }
    
    this.tableHeads = heads;
  }

  private setInfoCard(){
    this.primaryInfo = [];
    this.secondaryInfo = [];
    this.datesInfo = [];

    this.data.forEach((field : any)=> {
      const primaryInfo : string[] = [];
      const secondaryInfo : string[] = [];
      const datesInfo : string[] = [];

      for(let keyName in field){
        const keyLower = keyName.toLowerCase();

        if(keyLower.includes('invoice') || keyLower.includes('amount') || 
        (this.keyColumns.includes('id') && keyLower == 'id')){
          const value = this.transform.transform(field[keyName],keyName, this.keyTranslate) + '';
          primaryInfo.push(value);
        }
        else if(keyLower.includes('date')){
          const value = this.transform.transform(field[keyName],keyName, this.keyTranslate) + '';
          datesInfo.push(value);
        }
        else if(keyLower.includes('name') || keyLower.includes('email')){
          const value = this.transform.transform(field[keyName],keyName, this.keyTranslate) + '';
          secondaryInfo.push(value);
        }
        else if(keyLower.includes('state')){
          const value = this.transform.transform(field[keyName],keyName, this.keyTranslate) + '';
          this.states.push(value);
        }
      }

      this.primaryInfo.push(this.getStringProcess(primaryInfo, '    -    '));
      this.datesInfo.push(this.getStringProcess(datesInfo, '  -  '));
      let secondaryInfoString = this.getStringProcess(secondaryInfo.slice(0,2), '|');
      this.secondaryInfo.push(secondaryInfoString.split('|'));
    })
  }

  private getTranslate(key : string) : string | undefined{
    const fullKey : string = this.keyTranslate + '.' + key.toUpperCase();
    const translate : string = this.translate.instant(fullKey);
    return translate == fullKey ? undefined : translate;
  }

  onAction(action : string, dataField : any){
    this.action.emit({event : action, dataField});
  }

  isActionSensitive(action : string, state : string){
    let isSensitive = this.actionsIf.find((actionActive : ActionActive) => {
      
      return actionActive.action == action;
     
    })
    if(isSensitive){
      return this.actionsIf.find((actionActive : ActionActive) => {
       
        return actionActive.state == state;
      })
    }
    return false;
  }


  getStringProcess(values : any[], separator : string){
    let stringProcess = "";
    const length = values.length;

    values.forEach((value : any, index : number) => {
      stringProcess += (index + 1 != length) ? value + separator : value;
    })

    return stringProcess;
  }

  trackByFn(index: number, key: any): number {
    return key;
  }

  getTooltipText(action: string, dataField: { isReported: boolean }): string {
    
    
    const tooltips: Record<string, string> = {
      report: dataField.isReported
        ? this.translate.instant('IP.ACTIONS_TOOLTIP.REPORTED')
        : this.translate.instant('IP.ACTIONS_TOOLTIP.REPORT'),
      edit: this.translate.instant('IP.ACTIONS_TOOLTIP.EDIT'),
      delete: this.translate.instant('IP.ACTIONS_TOOLTIP.DELETE'),
      import: this.translate.instant('IP.ACTIONS_TOOLTIP.IMPORT'),
      pay: this.translate.instant('IP.ACTIONS_TOOLTIP.PAY'),
      info: this.translate.instant('IP.ACTIONS_TOOLTIP.INFO'),
      file: this.translate.instant('IP.ACTIONS_TOOLTIP.FILE'),
      comment: this.translate.instant('IP.ACTIONS_TOOLTIP.COMMENT'),
    };

    return tooltips[action] || '';
  }
}
