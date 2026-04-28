import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Estrutura de dados que o card espera receber
interface Post {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  imagem: string;
}

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.html',
  styleUrls: ['./post-card.css'],
  imports: [RouterLink]
})
export class PostCard {

  // @Input() significa que este dado vem de fora (do componente pai)
  // O pai passa o post assim: <app-post-card [post]="post" />
  @Input() post!: Post;
}
