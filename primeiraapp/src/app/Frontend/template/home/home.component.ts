import { Component } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: '../home/home.component.html',
  styleUrls: ['../home/home.component.css'],
})
export class HomeComponent {
  nome: string = '';
  nome2: string = '';
  nome3: string = '';
  nome4: string = '';
  mySource: string = 'assets/img/camila.jpg';
  mySource2: string = 'assets/img/Igla1.png';
  mySource3: string = 'assets/img/arnaldo.png';
  mySource4: string = 'assets/img/rafael.png';
  favorite: string = 'assets/img/white.png';
  favorite2: string = 'assets/img/white.png';
  favorite3: string = 'assets/img/white.png';
  favorite4: string = 'assets/img/white.png';

  botaoPhoto() {
    if (this.mySource === 'assets/img/avanade.png') {
      return (this.nome = '1'), (this.mySource = 'assets/img/Camila.jpg');
    } else {
      return (this.nome = '2'), (this.mySource = 'assets/img/avanade.png');
    }
  }

  botaoPhoto2() {
    this.mySource2 = 'assets/img/dio.png';
    this.nome2 =
      'CEO & Founder na Digital Innovation One Inc.Estamos ajudando empresas a contratar os melhores talentos e pessoas em tecnologia para transformar suas carreiras profissionais para uma vida melhor.';
  }
  botaoPhoto3() {
    this.mySource3 = 'assets/img/avanade.png';
    this.nome3 =
      'Talent Acquisition Analyst - Avanade, Como parte da equipe da Avanade, estou sempre procurando pessoas talentosas que desenvolvam soluções de TI personalizadas para clientes corporativos.';
  }
  botaoPhoto4() {
    this.mySource4 = 'assets/img/avanade.png';
    this.nome4 = 'Director na Avanade';
  }
  botaoLike() {
    this.favorite = 'assets/img/black.png';
  }
  botaoLike2() {
    this.favorite2 = 'assets/img/black.png';
  }
  botaoLike3() {
    this.favorite3 = 'assets/img/black.png';
  }
  botaoLike4() {
    this.favorite4 = 'assets/img/black.png';
  }
}
