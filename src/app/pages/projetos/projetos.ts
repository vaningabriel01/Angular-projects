import { Component } from '@angular/core';

// Estrutura de dados de um projeto social
interface Projeto {
  id: number;
  titulo: string;
  categoria: string;
  descricao: string;
  imagem: string;
  local: string;
  beneficiados: string;
  ano: number;
  detalhes: string[]; // parágrafos exibidos no modal
}

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.css']
})
export class Projetos {

  // Projeto que está aberto no modal (null = modal fechado)
  projetoSelecionado: Projeto | null = null;

  // Abre o modal com o projeto clicado
  abrirModal(projeto: Projeto): void {
    this.projetoSelecionado = projeto;
  }

  // Fecha o modal
  fecharModal(): void {
    this.projetoSelecionado = null;
  }

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Escola do Futuro',
      categoria: 'Educação',
      descricao: 'Programa de capacitação tecnológica para jovens de comunidades próximas às operações da PetroEnergy.',
      imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      local: 'Santos, SP',
      beneficiados: '1.200',
      ano: 2018,
      detalhes: [
        'O programa Escola do Futuro oferece cursos gratuitos de programação, robótica e empreendedorismo para jovens entre 14 e 22 anos residentes em comunidades do litoral paulista.',
        'Em parceria com instituições de ensino técnico, o projeto já formou mais de 1.200 jovens, dos quais 68% foram inseridos no mercado de trabalho em até seis meses após a conclusão do curso.',
        'Para 2026, a PetroEnergy planeja expandir o programa para outras cidades do litoral, dobrando a capacidade de atendimento e incluindo novos cursos voltados para a área de energias renováveis.'
      ]
    },
    {
      id: 2,
      titulo: 'Água Limpa',
      categoria: 'Meio Ambiente',
      descricao: 'Iniciativa de despoluição e preservação de rios e manguezais nas regiões de atuação da empresa.',
      imagem: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80',
      local: 'Baixada Santista, SP',
      beneficiados: '45.000',
      ano: 2015,
      detalhes: [
        'O projeto Água Limpa atua na recuperação de rios, córregos e manguezais degradados nas regiões onde a PetroEnergy opera, com equipes de voluntários e especialistas ambientais.',
        'Desde 2015, o programa recuperou mais de 380 hectares de manguezal e retirou mais de 200 toneladas de resíduos de corpos hídricos na Baixada Santista.',
        'O projeto também inclui campanhas de educação ambiental nas escolas públicas da região, alcançando mais de 45.000 pessoas com ações de conscientização sobre preservação dos recursos naturais.'
      ]
    },
    {
      id: 3,
      titulo: 'Prato Cheio',
      categoria: 'Assistência Social',
      descricao: 'Programa de segurança alimentar que distribui refeições e cestas básicas para famílias em situação de vulnerabilidade.',
      imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
      local: 'São Paulo, SP',
      beneficiados: '8.500',
      ano: 2020,
      detalhes: [
        'Criado durante a pandemia de COVID-19, o programa Prato Cheio nasceu como resposta emergencial à crise alimentar e se tornou uma iniciativa permanente da PetroEnergy.',
        'Semanalmente, o programa distribui mais de 2.000 refeições quentes e 500 cestas básicas para famílias cadastradas em situação de vulnerabilidade social na Grande São Paulo.',
        'Em parceria com bancos de alimentos e cooperativas locais, o Prato Cheio também gera renda para pequenos agricultores familiares, criando um ciclo sustentável de impacto social positivo.'
      ]
    },
    {
      id: 4,
      titulo: 'Mulheres na Energia',
      categoria: 'Diversidade',
      descricao: 'Programa de incentivo à inserção e crescimento de mulheres no setor de energia e tecnologia.',
      imagem: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
      local: 'Nacional',
      beneficiados: '3.200',
      ano: 2019,
      detalhes: [
        'O programa Mulheres na Energia oferece bolsas de estudo, mentoria e estágios remunerados para mulheres que desejam ingressar em carreiras nas áreas de engenharia, tecnologia e gestão no setor energético.',
        'Desde sua criação, o programa contribuiu para o aumento de 34% na contratação de mulheres em cargos técnicos e de liderança na PetroEnergy, referência no setor.',
        'Além das bolsas, o projeto mantém uma rede de mentoras composta por executivas e engenheiras da empresa, que orientam as participantes em seu desenvolvimento profissional e pessoal.'
      ]
    },
    {
      id: 5,
      titulo: 'Comunidade Empreendedora',
      categoria: 'Geração de Renda',
      descricao: 'Apoio a micro e pequenos empreendedores locais com capacitação, microcrédito e acesso a mercados.',
      imagem: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      local: 'Macaé, RJ',
      beneficiados: '620',
      ano: 2021,
      detalhes: [
        'O programa Comunidade Empreendedora apoia micro e pequenos negócios localizados nas regiões onde a PetroEnergy atua, oferecendo capacitação em gestão financeira, marketing digital e inovação.',
        'Por meio de um fundo de microcrédito próprio, o programa já concedeu mais de R$ 3,2 milhões em crédito acessível para 620 empreendedores, com taxa de inadimplência inferior a 4%.',
        'Os empreendimentos apoiados também têm prioridade no cadastro de fornecedores da PetroEnergy, garantindo acesso a contratos e oportunidades de negócio com a empresa.'
      ]
    },
    {
      id: 6,
      titulo: 'Saúde nas Comunidades',
      categoria: 'Saúde',
      descricao: 'Atendimento médico gratuito e campanhas de prevenção em comunidades carentes próximas às operações da empresa.',
      imagem: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      local: 'Múltiplas cidades',
      beneficiados: '22.000',
      ano: 2017,
      detalhes: [
        'O programa Saúde nas Comunidades leva atendimento médico, odontológico e psicológico gratuito a populações em situação de vulnerabilidade nas cidades onde a PetroEnergy tem operações.',
        'Uma frota de unidades móveis de saúde percorre periodicamente as comunidades atendidas, realizando consultas, exames preventivos, vacinação e distribuição de medicamentos básicos.',
        'Em 2024, o programa realizou mais de 38.000 atendimentos em 12 municípios, contribuindo para a redução de indicadores de doenças evitáveis e melhorando a qualidade de vida de 22.000 pessoas.'
      ]
    }
  ];
}
