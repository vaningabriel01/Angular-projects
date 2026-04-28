import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeBanner } from '../../components/homeComponent/home.component'; // componente hero banner

interface Post {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  imagem: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterLink, HomeBanner] // HomeBanner registrado aqui para aparecer no HTML
})
export class Home {

  posts: Post[] = [
    {
      id: 1,
      titulo: 'Exploração no Pré-Sal da Bacia de Santos',
      resumo: 'A PetroEnergy iniciou uma nova fase de exploração na Bacia de Santos, com estimativa de 2 bilhões de barris de petróleo em reservas.',
      data: '10 Abr 2025',
      imagem: 'https://nossaenergia.petrobras.com.br/o/adaptive-media/image/41911941/Preview-1000x0/nossa-energia-bacia-de-santos-destaque.jpg?t=1762346296000'
    },
    {
      id: 2,
      titulo: 'Nova Plataforma de Extração no Golfo do México',
      resumo: 'A instalação da plataforma P-78 marca a expansão internacional da empresa, com operações previstas para início em 2026.',
      data: '22 Mar 2025',
      imagem: 'https://cdn.oantagonista.com/uploads/2026/01/plataforma-de-petroleo_1767816931196-1024x576.jpg'
    },
    {
      id: 3,
      titulo: 'Projeto Gás Verde: Energia com Menor Pegada de Carbono',
      resumo: 'O projeto visa reduzir as emissões durante a extração de gás natural, tornando o processo mais eficiente e sustentável.',
      data: '05 Mar 2025',
      imagem: 'https://abiogas.com.br/wp-content/uploads/2024/12/63cecc902a95285df318e89c_AF-GAS_VERDE_LOGOS-RGB-1-p-500.jpg'
    }
  ];
}
