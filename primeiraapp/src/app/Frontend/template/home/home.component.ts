import { Component } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: '../home/home.component.html',
  styleUrls: ['../home/home.component.css']
})

export class HomeComponent {
  nome :string ="";nome2 :string ="";
  nome3 :string ="";nome4 :string ="";
  mySource: string = 'assets/img/camila.jpg';
  mySource2: string = 'assets/img/Igla1.png';
  mySource3: string = 'assets/img/arnaldo.png';
  mySource4: string = 'assets/img/rafael.png';
  inativo : boolean = true;


  botaoPhoto(){
  this.mySource = "assets/img/avanade.png"
  this.nome = 'Sou Full-Stack Developer na Avanade, nasci em 1993 (taurina raiz) e me formei em Ciência da Computação.Amo ler, ver filmes, animes e séries.'
}
botaoPhoto2(){
  this.mySource2 = "assets/img/dio.jpg"
  this.nome2 = 'CEO & Founder na Digital Innovation One Inc.Estamos ajudando empresas a contratar os melhores talentos e pessoas em tecnologia para transformar suas carreiras profissionais para uma vida melhor.'
}
botaoPhoto3(){
  this.mySource3 = "assets/img/avanade.png"
  this.nome3 = 'Talent Acquisition Analyst - Avanade, Como parte da equipe da Avanade, estou sempre procurando pessoas talentosas que desenvolvam soluções de TI personalizadas para clientes corporativos.'
}
botaoPhoto4(){
  this.mySource4 = "assets/img/avanade.png"
  this.nome4 = 'Director na Avanade'
}
  botaoLike(){
  this.inativo = false;
  }
}


