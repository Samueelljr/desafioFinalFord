import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InformationCarsComponent } from '../modal/information-cars/information-cars.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-exhibition-cars',
  standalone: true,
  imports: [
    CommonModule,
    InformationCarsComponent,
    TranslateModule
  ],
  templateUrl: './exhibition-cars.component.html',
  styleUrl: './exhibition-cars.component.css',
})
export class ExhibitionCarsComponent {
  fordModelos = [
   {
     img: 'assets/images/mustangGTautomatico.jpg',
     modelo: "Mustang GT (automático)",
     ano: 2025,
     tipoMotor: "V8 5.0 aspirado – ~488 cv",
     cambio: "Automático de 10 marchas",
     direcao: "Traseira",
     freio: "N/D",
     carroceria: "Cupê esportivo",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/mustangGTmanual.jpg",
     modelo: "Mustang GT manual",
     ano: 2025,
     tipoMotor: "V8 5.0 aspirado – ~488 cv",
     cambio: "Manual de 6 marchas",
     direcao: "Traseira",
     freio: "N/D",
     carroceria: "Cupê esportivo",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/mustangMach-E.jpg",
     modelo: "Mustang Mach-E",
     ano: 2025,
     tipoMotor: "Elétrico – até 487 cv",
     cambio: "N/D",
     direcao: "Traseira ou integral",
     freio: "N/D",
     carroceria: "SUV elétrico",
     velocidadeMaxima: "N/D",
     consumo: "Autonomia entre 418 km e 483 km",
     combustivel: "Elétrico"
   },
   {
     img: "assets/images/mustangMach-1.jpg",
     modelo: "Mustang Mach-1",
     ano: 2025,
     tipoMotor: "V8 5.0 aspirado (~486 cv)",
     cambio: "Automático de 10 marchas",
     direcao: "Traseira",
     freio: "N/D",
     carroceria: "Cupê esportivo",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/rangerCabineDupla.jpg",
     modelo: "Ranger Cabine Dupla",
     ano: 2025,
     tipoMotor: "2.0 turbodiesel (~170 cv) / V6 3.0 diesel",
     cambio: "Manual/Automático (N/D)",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape média",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Diesel"
   },
   {
     img: "assets/images/rangerCabineSimples.jpg",
     modelo: "Ranger Cabine Simples",
     ano: 2025,
     tipoMotor: "2.0 turbodiesel – ~170 cv",
     cambio: "Manual de 6 marchas",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape utilitária",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Diesel"
   },
   {
     img: "assets/images/rangerStorm.jpg",
     modelo: "Ranger Storm",
     ano: 2025,
     tipoMotor: "V6 (N/D)",
     cambio: "N/D",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape média off-road",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina/Diesel (N/D)"
   },
   {
     img: "assets/images/rangerRaptor.jpg",
     modelo: "Ranger Raptor",
     ano: 2025,
     tipoMotor: "V6 3.5 biturbo – ~456 cv",
     cambio: "Automático de 10 marchas",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape média off-road",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/rangerHibrida.jpg",
     modelo: "Ranger Híbrida",
     ano: 2025,
     tipoMotor: "V6 3.5 turbo + elétrico – ~436 cv",
     cambio: "Automático (N/D)",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape média híbrida",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Híbrido"
   },
   {
     img: "assets/images/f-150Lariat.jpg",
     modelo: "F-150 Lariat",
     ano: 2025,
     tipoMotor: "V6 3.5 EcoBoost – ~405 cv",
     cambio: "Automático de 10 marchas",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape full-size",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/f-150Tremor.jpg",
     modelo: "F-150 Tremor",
     ano: 2025,
     tipoMotor: "V8 5.0 – ~405 cv",
     cambio: "Automático de 10 marchas",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape full-size off-road",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/f-150Tremor.jpg",
     modelo: "F-150 Raptor",
     ano: 2025,
     tipoMotor: "V6 3.5 biturbo – 456 cv",
     cambio: "Automático de 10 marchas",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape full-size off-road",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/f-150Hibrida.jpg",
     modelo: "F-150 Híbrida",
     ano: 2025,
     tipoMotor: "V6 3.5 turbo + elétrico – ~436 cv",
     cambio: "Automático (N/D)",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape full-size híbrida",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Híbrido"
   },
   {
     img: "assets/images/territory.jpg",
     modelo: "Territory (atual)",
     ano: 2025,
     tipoMotor: "1.5 turbo – ~150 cv",
     cambio: "CVT simulado (N/D)",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "SUV médio",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/territoryReestilizado.jpg",
     modelo: "Territory reestilizado / PHEV",
     ano: 2026,
     tipoMotor: "1.5 turbo + elétrico – ~218 cv",
     cambio: "Automático (N/D)",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "SUV médio híbrido plug-in",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Híbrido"
   },
   {
     img: "assets/images/broncoSport.jpg",
     modelo: "Bronco Sport (Wildtrak / facelift)",
     ano: 2025,
     tipoMotor: "2.0 EcoBoost – ~240 cv",
     cambio: "Automático de 8 marchas",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "SUV aventureiro",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/maverickLariatFX4.jpg",
     modelo: "Maverick (Lariat FX4)",
     ano: 2025,
     tipoMotor: "2.0 turbo – ~253 cv",
     cambio: "N/D",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape compacta",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Gasolina"
   },
   {
     img: "assets/images/maverickHibrida.jpg",
     modelo: "Maverick Híbrida (reestilizada)",
     ano: 2025,
     tipoMotor: "2.5 híbrido – ~194 cv",
     cambio: "N/D",
     direcao: "N/D",
     freio: "N/D",
     carroceria: "Picape compacta híbrida",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Híbrido"
   },
   {
     img: "assets/images/transit.jpg",
     modelo: "Transit (furgão)",
     ano: 2025,
     tipoMotor: "2.0 turbodiesel – ~170 cv",
     cambio: "Manual de 6 marchas",
     direcao: "Traseira",
     freio: "N/D",
     carroceria: "Van/furgão",
     velocidadeMaxima: "N/D",
     consumo: "N/D",
     combustivel: "Diesel"
   },
   {
     img: "assets/images/e-TransitMinibus.jpg",
     modelo: "E-Transit Minibus elétrica",
     ano: 2025,
     tipoMotor: "Elétrico – (N/D autonomia)",
     cambio: "N/D",
     direcao: "Traseira",
     freio: "N/D",
     carroceria: "Van elétrica (minibus)",
     velocidadeMaxima: "N/D",
     consumo: "Autonomia até ~350 km",
     combustivel: "Elétrico"
   }
 ];

  maisPopulares = this.getRandomItems(this.fordModelos, 3);
  maisVendidos = this.getRandomItems(this.fordModelos, 2);

  modalOpen = false;
  selectCar: any = null;

  getRandomItems(array: any[], quantidade: number) {
    return [...array]
      .sort(() => Math.random() - 0.5)
      .slice(0, quantidade);
  }

  openModal(carro: any) {
    this.modalOpen = true;
    this.selectCar = carro;
  }
   
  closedModal() {
    this.modalOpen = false;
    this.selectCar = null;
  }

  
}
