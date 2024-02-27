import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'groceries.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['groceries.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

}
