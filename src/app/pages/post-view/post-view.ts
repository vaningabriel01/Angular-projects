import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common'; // importações necessárias para *ngIf e *ngFor

// Estrutura completa do post com conteúdo detalhado
interface Post {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  autor: string;
  imagem: string;
  conteudo: string[];
}

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.html',
  styleUrls: ['./post-view.css'],
  imports: [RouterLink,] // NgIf e NgFor adicionados aqui
})
export class PostView implements OnInit {

  post: Post | null = null;

  posts: Post[] = [
    {
      id: 1,
      titulo: 'Exploração no Pré-Sal da Bacia de Santos',
      resumo: 'A PetroEnergy iniciou uma nova fase de exploração na Bacia de Santos, com estimativa de 2 bilhões de barris de petróleo em reservas.',
      data: '10 Abr 2025',
      autor: 'Equipe PetroEnergy',
      imagem: 'https://nossaenergia.petrobras.com.br/o/adaptive-media/image/41911941/Preview-1000x0/nossa-energia-bacia-de-santos-destaque.jpg?t=1762346296000',
      conteudo: [
        'A PetroEnergy deu início a uma nova e ambiciosa fase de exploração na Bacia de Santos, uma das regiões com maior potencial de reservas de petróleo do mundo. O projeto, denominado Santos Deep, representa um investimento de R$ 4,2 bilhões ao longo dos próximos cinco anos.',
        'As operações contam com tecnologia de perfuração de última geração, capaz de alcançar profundidades superiores a 7.000 metros abaixo do nível do mar. A estimativa preliminar aponta para reservas na ordem de 2 bilhões de barris de petróleo de alta qualidade, com baixo teor de enxofre.',
        'O projeto também se destaca pelo compromisso ambiental. A PetroEnergy adotou um sistema de captura e reaproveitamento de gases que reduz as emissões de CO₂ em até 40% em comparação com métodos convencionais de extração.',
        'Além do impacto econômico direto, o projeto Santos Deep deve gerar mais de 3.200 empregos diretos e indiretos nas cidades do litoral paulista, contribuindo significativamente para o desenvolvimento regional.'
      ]
    },
    {
      id: 2,
      titulo: 'Nova Plataforma de Extração no Golfo do México',
      resumo: 'A instalação da plataforma P-78 marca a expansão internacional da empresa, com operações previstas para início em 2026.',
      data: '22 Mar 2025',
      autor: 'Departamento Internacional',
      imagem: 'https://cdn.oantagonista.com/uploads/2026/01/plataforma-de-petroleo_1767816931196-1024x576.jpg',
      conteudo: [
        'A PetroEnergy concluiu a instalação da plataforma semissubmersível P-78 no Golfo do México, marcando um passo histórico na expansão internacional da companhia. A plataforma está posicionada a 320 quilômetros da costa do México, em uma lâmina d\'água de 1.800 metros.',
        'Com capacidade de produção de 180 mil barris de petróleo por dia, a P-78 é a maior plataforma já operada pela PetroEnergy fora do território brasileiro. O investimento total na unidade foi de US$ 2,8 bilhões, com recursos próprios e parceria com a empresa mexicana Pemex.',
        'A plataforma conta com sistemas avançados de detecção de vazamentos e um plano de resposta a emergências desenvolvido em conjunto com autoridades ambientais do México e dos Estados Unidos, garantindo os mais altos padrões de segurança operacional.',
        'As operações comerciais estão previstas para o primeiro trimestre de 2026. A PetroEnergy estima que a P-78 contribuirá com aproximadamente 15% do faturamento total da companhia já no primeiro ano de operação plena.'
      ]
    },
    {
      id: 3,
      titulo: 'Projeto Gás Verde: Energia com Menor Pegada de Carbono',
      resumo: 'O projeto visa reduzir as emissões durante a extração de gás natural, tornando o processo mais eficiente e sustentável.',
      data: '05 Mar 2025',
      autor: 'Diretoria de Sustentabilidade',
      imagem: 'https://abiogas.com.br/wp-content/uploads/2024/12/63cecc902a95285df318e89c_AF-GAS_VERDE_LOGOS-RGB-1-p-500.jpg',
      conteudo: [
        'O Projeto Gás Verde representa o maior compromisso da PetroEnergy com a transição energética. A iniciativa, desenvolvida ao longo de três anos em parceria com centros de pesquisa brasileiros e europeus, redefine os padrões de extração de gás natural no país.',
        'O coração do projeto é uma tecnologia proprietária de captura de metano durante o processo de extração. Historicamente, parte do gás natural era queimada ou liberada na atmosfera durante as operações — prática conhecida como flaring. Com o Gás Verde, esse índice cai de 8% para menos de 0,5%.',
        'Além da captura de metano, o projeto integra painéis solares e turbinas eólicas nas instalações de extração para alimentar as operações com energia limpa. Com isso, a pegada de carbono das operações é reduzida em 62% em relação à média do setor.',
        'O Projeto Gás Verde já recebeu certificação internacional de sustentabilidade e está sendo estudado por outras petroleiras como modelo a ser replicado. A PetroEnergy pretende expandir a tecnologia para todas as suas operações até 2030.'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.posts.find(p => p.id === id) || null;
  }
}
