<template>
  <div class="container">
    <h1 class="title">Salvar vídeo</h1>
    <form method="POST">
      <div class="form-container">
        <div class="form-group">
          <label for="title"> Título do vídeo</label>
          <input type="text" class="form-control" placeholder="Insira um título para o vídeo" />
        </div>
        <div class="form-group">
          <label for="title">URL do vídeo no Youtube</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="videoUrl"
            placeholder="Cole a URL do vídeo copiada do Youtube"
          />
          <small id="videoUrl" class="text-muted">
            Vá até o vídeo desejado no Youtube, clique com o botão direito e selecione "Copiar URL
            do vídeo"</small
          >
        </div>
        <div class="button-container">
          <input type="submit" class="button" value="Salvar" />
        </div>
      </div>
    </form>
  </div>
</template>
