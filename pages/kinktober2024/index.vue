<script setup>
  const list = [
    'manso',
    'câmera',
    'frio',
    'veia',
    'friso',
    'amassar',
    'culpado',
    'erguer',
    'asas',
    'brilho',
    'engasgar',
    'canalha',
    'sabonete',
    'bota',
    'caça',
    'umbigo',
    'formal',
    'vermelho',
    'demônio',
    'passade',
    'banho',
    'decente',
    'praia',
    'instigar',
    'palma',
    'noite',
    'colega',
    'faca',
    'aconchegar',
    'despudorar'
  ]
</script>
<template>
  <div class="container">
    <h1>kinktober 2024</h1>

    <p>
      Olá, querides! Mais um #kinktober 2024, inspirado no #Inktober meio-oficial que roda por aí. 
    </p>
    <p>
      Como no ano passado, vamos focar a visualização no Mastodon, <a href="https://ursal.zone/tags/kinktober">então clique aqui para seguir.</a>
    </p>
    <p>
      Clique nos botões abaixo também para navegar entre as artes.
    </p>

    <p>Regras do jogo:</p>

    <ul>
      <li>Saia desta página agora se você é menor de 18 anos!</li>
      <li>A lista de tópicos para você se inspirar, diariamente. Pegue o item do dia e use para desenhar.</li>
      <li>Se não der para fazer todo o dia, faça a cada 2 dias. Ou um tópico por semana. Ou a cada duas 2 semanas. Fique ao seu critério e disponibilidade para participar.</li>
      <li>Pode fazer digital, se não tiver como desenhar no físico.</li>
      <li>Só não vale usar IA. Tô de olho em você.</li>
      <li>Sim, eu sei que você é de menor e resolveu me ignorar. Vou falar pra sua mãe.</li>
      <li>Ao postar em alguma rede social, sempre use descrição e alerta de conteúdo.</li>
      <li>Não faça nada criminoso.</li>

    </ul>


    <div class="the-zone">
      <kinktober-item
        v-for="(palavra, index) in list" 
        :itemName="(index + 1) + ' - ' + palavra"
        :index="index + 1">
      </kinktober-item>
    </div>
  </div>

</template>

<style>
  .container {
    max-width: 800px;
    margin: 10px auto;
  }
  .the-zone {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
  }
</style>