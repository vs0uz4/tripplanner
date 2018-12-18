<p align="center">
<img style="-webkit-user-select: none;padding: 10px;" src="https://raw.githubusercontent.com/vs0uz4/tripplanner/master/.screens/tripplaner_screensshots.webp" height="280">
</p>
<p align="center">
  <a href="https://facebook.github.io/react-native/" target="_blank">
    <img style="-webkit-user-select: none;padding: 10px;" src="https://kaysharbor.com/wp-content/uploads/2018/05/all-about-react-native-apps-776x415.png" height="100">
  </a>
  <a href="https://cloud.google.com/maps-platform/" target="_blank">
    <img style="-webkit-user-select: none;padding: 10px;" src="https://cdn.instructables.com/FL6/D3UC/IDCXFDAX/FL6D3UCIDCXFDAX.LARGE.jpg" height="100">
  </a>
</p>


## DevPleno - HandsOn React Native 2018 (Tripplaner)
O Tripplanner é um aplicativo mobile, para você planejar suas viagens, podendo adicionar os locais por onde passou e os custos envolvidos. Alimentação, hospedagem, transporte, passeios tudo pode ser adicionado como um **ponto** da viagem. O aplicativo multiplataforma foi desenvolvido em Javascript, usando o framework React Native. Podendo ser disponibilizado para as plataformas *IOS* e *ANDROID*.


## Tecnologias Envolvidas
- NodeJS;
- Npm ou Yarn;
- Android SDK;
- Xcode;
- React Native;
- Google Maps API.

> Para realizar o *Build* e gerarmos os *.APK*, aplicativos para a plataforma [ANDROID](https://www.android.com/) se faz necessário a instalação e configuração do [Android Studio](https://developer.android.com/studio/?hl=pt-br) 

> Para aplicativos *.IPA*, destinados a plataforma [IOS](https://www.apple.com/br/ios/ios-12/) temos a necessidade de um sistema operacional [OSX](https://www.apple.com/br/macos/mojave/) além de instalar e configurar o [XCode](https://developer.apple.com/xcode/)


## Funcionalidades

- Criação de Viagens;
- Griação de Pontos de Viagem;
- Persistência dos Dados no AsyncStorage;
- **Posicionamento GPS em Realtime**;
- ~~Adição de Imagem à Viagem~~;
- ~~Adição de Preços em Outras Moedas~~.

> O posicionamento georeferencial em tempo real foi implementado na seção de adição de pontos de viagens, afim de que o *MAPA* utilize como parâmetro a sua localização atual. Esta funcionalidade foi adicionada por conta própria e com a finalidade de melhorar a usabilidade do aplicativo.

> Para poder utilizar a localização em tempo real, foi necessário adicionar ao *Android Manifest* a permissão de geo localização.


## Construção do Aplicativo

O HandsOn foi todo baseado na criação do aplicativo para a plataforma *IOS*, porém por falta de um computador com sistema operacional *OSX*, focamos o desenvolvimento do projeto para a plataforma *Android*.

> Para criar efetivamente o *.Apk* para distribuição e/ou efetuar testes nos dispositivos *Android* se fez necessário a crialçai de uma *Key* (Chave) para assinatura do aquivo final *.APK*, além de algumas configurações extas. As Configurações podem ser encontradas nos seguintes links abaixo:

- https://facebook.github.io/react-native/docs/signed-apk-android
- https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md

### Comandos

Após instalar, configurar o Android Studio e posteriormente a ter criado e configurado a *imagem* a ser utilizada para testes durante o desenvolvimento do aplicativo através do *AVD Manager*, passei a utilizar o seguinte comando abaixo para iniciar o emulador:

```emulator -avd nome_da_imagem_avd```

Para iniciar a criação do *bundle* utilizei o seguinte comando abaixo:

```react-native start```

Para gerar a versão do aplicativo, automaticamente instala-la no emulador e já iniciar a mesma, basta usar o comando abaixo:

```react-native run-android```

> O comando acima irá criar uma versão do aplicativo menos performática do que versão final de distribuição devido estar disponível junto a ela todas as funcionalidades de suporte a debug.

E por fim para efetivamente gerar o *.apk*, após as devidas configurações sejam efetivamente realizadas, basta executar o seguinte comando em seu shell

```react-native run-android --variant=release```


## Todo
Algumas funcionalidades extras que não encontravam-se no escopo do treinamento estão na pendência de serem desenvolvidas afim de praticar e fixar os conhecimentos. Estas funcionalidades foram sugeridas como melhoria para o projeto de forma a constarem no portifólio de aplicações/projetos desenvolvidos. As funcionalidades a serem desenvolvidas são:
- [ ] [Android/IOS] Adição de Imagem à Viagem;
- [ ] [Android/IOS] Adição de Preços em Outras Moedas.

> Ultima atualização : 18/12/2018


## Informações importantes:

Este projeto foi entregue como parte do Workshop, **Hands On React Native** (edição Tripplaner) promovido pelo **DevPleno** (www.devpleno.com).

**Participante:** Vitor de Souza Rodrigues

**Chave do Certificado:** ...

O certificado pode ser consultado em: https://certificados.devpleno.com