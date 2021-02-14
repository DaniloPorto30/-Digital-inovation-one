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
  mySource: boolean = false;
  mySource2: boolean = false;
  mySource3: boolean = false;
  mySource4: boolean = false;
  igla: string = 'assets/img/Igla1.png';
  arnaldo: string = 'assets/img/arnaldo.png';
  rafael: string = 'assets/img/rafael.png';
  camila = 'assets/img/camila.jpg';
  avanade = 'assets/img/avanade.png';
  dio: string = 'assets/img/dio.png';

  favorite: string = 'assets/img/white.png';
  favorite2: string = 'assets/img/white.png';
  favorite3: string = 'assets/img/white.png';
  favorite4: string = 'assets/img/white.png';

  onBotaoPhoto() {
    this.mySource = !this.mySource;
    this.nome = 'Sou Full-Stack Developer na Avanade, nasci em 1993 (taurina raiz) e me formei em Ciência da Computação. Amo ler, ver filmes, animes e séries.';
  }
  onBotaoPhoto2() {
    this.mySource2 = !this.mySource2;
    this.nome2 ='CEO & Founder na Digital Innovation One Inc.Estamos ajudando empresas a contratar os melhores talentos e pessoas em tecnologia para transformar suas carreiras profissionais para uma vida melhor.';
  }
  onBotaoPhoto3() {
    this.mySource3 = !this.mySource3;
    this.nome3 ='Talent Acquisition Analyst - Avanade, Como parte da equipe da Avanade, estou sempre procurando pessoas talentosas que desenvolvam soluções de TI personalizadas para clientes corporativos.';
  }
  onBotaoPhoto4() {
    this.mySource4 = !this.mySource4;
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
