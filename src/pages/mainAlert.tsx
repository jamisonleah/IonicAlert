import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Alerts </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton color="tertiary" expand="block"> Paul Spotted </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
