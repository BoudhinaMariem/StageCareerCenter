import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  powerBiUrl = 'https://app.powerbi.com/reportEmbed?reportId=d8c6e512-52e8-4d7c-903d-c3b968112f24&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=d29274c0850a7b277d58&navContentPaneEnabled=false&toolbar=0&filterPaneEnabled=false';
}
