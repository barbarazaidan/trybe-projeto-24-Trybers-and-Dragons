# Projeto Trybers and Dragons
## Este repositório contém o desenvolvimento do meu 24º projeto na Trybe

Neste projeto apliquei os conceitos da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos no estilo `RPG` (_Role Playing Game_).

## Detalhes do projeto

Confira os requisitos exigidos pela Trybe (texto extraído dos readme oficial da Trybe):

<details>
  <summary><strong>🐉 Contextualizando 🐲</strong></summary><br />

  No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma **raça** definida.

  As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

  Alguns seres também possuem uma **energia** e, ao treinarem o uso da energia, passam a possuir um **arquétipo**. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

  Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.

</details>

**1 - Crie a classe abstrata `Race`**

<details><summary>Detalhes</summary>
<p>

> O arquivo deve ser criado no diretório `src/Races/` e se chamar `Race.ts`;
> A classe `Race` deve ter os atributos privados: `name` e `dexterity`, ambos inicializados em seu **construtor**;
> Os atributos da classe `Race` podem ser lidos, mas não podem ser alterados:
> A classe `Race` deve ter um **método estático** chamado `createdRacesInstances`, que retorna um `number`;
  - Esse número corresponde à quantidade de **instâncias criadas a partir das classes estendidas** da classe `Race`;
  - Cada raça terá seu número máximo de instâncias, **que será definido dentro de cada classe especializada**;
  - Na classe `Race`, o método deve lançar um erro com a mensagem `Not implemented`.
> A classe `Race` deve ter um **getter abstrato** chamado `maxLifePoints` que retorna um `number`;
  - Esse número corresponde à quantidade máxima de pontos de vida da raça;
  - Cada raça terá seu número máximo de pontos, **que será definido dentro de cada classe especializada**;
  - Na classe `Race` **deve estar apenas a assinatura do método**.

</p>
</details>

---

**2 - Crie classes que herdam de `Race`**

<details><summary>Detalhes</summary>
<p>

> Os arquivos devem ser criados no diretório `src/Races/`;
> Todas as raças devem estender da classe abstrata `Race`;
> As classes `Dwarf`, `Elf`, `Halfling` e `Orc` devem ser criadas em arquivos com exatamente esses nomes.
> Cada raça deve possuir um número máximo de pontos de vida (`maxLifePoints`), que deve ser inicializado em seu **construtor**:
  - A raça `Dwarf` deve receber `80` pontos de vida;
  - A raça `Elf` deve receber `99` pontos de vida;
  - A raça `Halfling` deve receber `60` pontos de vida;
  - A raça `Orc` deve receber `74` pontos de vida.

</p>
</details>

---

**3 - Crie a interface `Energy`**

<details><summary>Detalhes</summary>
<p>
  
Energia é um atributo vital para a maioria dos seres. No contexto de `Trybers and Dragons`, a energia gasta ao se andar, nadar, escalar ou lutar é chamada de *"stamina"* .
Contudo, esse universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta é chamada de *"mana"*.

Sua próxima missão é tornar possível o uso destes dois tipos de energia: *"stamina"* e *"mana"*. Para isso:

> Crie o arquivo `Energy.ts` na raiz do diretório `src/`.
> A interface deverá possuir os atributos:
  - `type_`, do tipo `EnergyType`; ✨✨
  - Esse novo tipo deve receber os valores: `'mana'` ou `'stamina'`;
  - O tipo `EnergyType` também deve ser exportado.
  - `amount`, do tipo `number`.

</p>
</details>

---

**4 - Crie a classe abstrata `Archetype`**

<details><summary>Detalhes</summary>
<p>

> O arquivo `Archetype.ts` deve ser criado no diretório `src/Archetypes/`;
> A classe `Archetype` deve ter os atributos privados: `name`, `special`, `cost`, que serão inicializados em seu **construtor**;
  - `name` deve ser recebido como parâmetro e inicializado no construtor;
  - `special` e `cost` devem ser apenas inicializados no construtor com o valor `0`.
> Os atributos da classe `Archetype` podem ser lidos, mas não podem ser alterados;
> A classe `Archetype` deve ter um **método estático** chamado `createdArchetypeInstances` que retorna um `number`:
  - Esse número corresponde à quantidade de **instâncias criadas a partir das classes estendidas** da classe abstrata `Archetype`;
  - Cada arquétipo terá seu número máximo de instâncias, **que será definido dentro de suas classes especializadas**;
  - Na classe abstrata `Archetype`, o método deve apenas lançar um erro com a mensagem `Not implemented`.
> A classe `Archetype` deve ter um **getter abstrato** chamado `energyType` que retorna uma `EnergyType`:
  - Esse tipo EnergyType corresponde ao tipo de energia que este arquétipo deve ter. *(`mana` ou `stamina`)*
  - Cada arquétipo terá o seu tipo de energia, **que será definido dentro de suas classes especializadas**;
  - A classe abstrata `Archetype` **deve conter apenas a assinatura do método**.

</p>
</details>

---

**5 - Crie classes que herdam de `Archetype`**

<details><summary>Detalhes</summary>
<p>

> Os arquivos devem ser criados no diretório `src/Archetypes/`;
> Todos os arquétipos devem estender da classe abstrata `Archetype`.
> No momento, vamos nos ater a quatro arquétipos muito comuns aos seres deste universo: (eles devem estar em quatro arquivos com os mesmos nomes)
  - `Mage` 🧙‍♀️;
  - `Necromancer` ☠️; 
  - `Warrior` ⚔️;
  - `Ranger` 🍃.
> Cada arquétipo possui a habilidade de causar danos em seus inimigos de forma diferente, e essa habilidade deve ser inicializada em seu **construtor**
  - Os arquétipos `Mage`🧙‍♀️ e `Necromancer`☠️ causam dano por meio de magia, através do uso de `mana`;
  - Os arquétipos `Warrior` ⚔️ e `Ranger` 🍃 causam dano por meio de sua força, usando `stamina`.

</p>
</details>

---

**6 - Crie a interface `Fighter`**

<details><summary>Detalhes</summary>
<p>

> Crie uma `interface` chamada `Fighter`;
> O arquivo `Fighter.ts` deve ser criado no diretório `src/Fighter/`;
> A interface deverá possuir os atributos:
  - `lifePoints`, do tipo `number`;
  - `strength`, do tipo `number`;
  - `defense`, do tipo `number`;
  - `energy`, do tipo `Energy`. ✨✨
> A interface deverá possuir os métodos:
  - `attack()`, que recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno (`void`);
  - `special()`, que recebe um `enemy` do tipo `Fighter` como parâmetro e não possui retorno (`void`); ✨✨
  - `levelUp()`, que não recebe parâmetro e não possui retorno (`void`);
  - `receiveDamage()`, que recebe um `attackPoints` do tipo `number` como parâmetro e retorne um `number`.

</p>
</details>

---

**7 - Crie a classe `Character`**

<details><summary>Detalhes</summary>
<p>

> O arquivo deve ser criado na raiz do diretório `src/` e se chamar `Character.ts`;
> A classe deve implementar a interface `Fighter`;
> A classe `Character` deve ter os atributos privados: `race`, `archetype`, `maxLifePoints`, `lifePoints`, `strength`, `defense`, `dexterity` e `energy`, todos inicializados em seu **construtor**;
  - O atributo `name` deve ser recebido como parâmetro no construtor e deve ser usado para dar nome à sua personagem.
  - Devem ser inicializados no construtor:
    - `dexterity` com um valor aleatório de no mínimo 1 e no máximo 10 pontos. ✨✨;
    - `race` por padrão com uma instância de `Elf` (A destreza de `Elf` deve ser a mesma definida em `dexterity`);
    - `archetype` por padrão com uma instância de `Mage`;
    - `maxLifePoints` por padrão com metade do `maxLifePoints` da raça instanciada;
    - `lifePoints` por padrão com o mesmo valor de `maxLifePoints` da classe;
    - `strength`, `defense` com valores aleatórios de no mínimo 1 e no máximo 10 pontos; ✨✨
    - `energy` por padrão:
      - `type_` com o mesmo valor do arquétipo instanciado;
      - `amount` com um valor aleatório de no mínimo 1 e no máximo 10 pontos. ✨✨
> Os atributos da classe `Character` podem ser lidos mas não podem ser alterados;
> A classe `Character` também deve implementar os métodos estendidos da `interface Fighter`;
  - **`receiveDamage 😵`** este método recebe por parâmetro um valor (`attackPoints`) e as regras são:
    - Para calcular o dano recebido (`damage`), o valor da defesa (`defense`) do personagem deve ser subtraído do valor do ataque recebido (`attackPoints`);
    - Se o dano calculado (`damage`) for maior que `0`, você perde esse valor em pontos de vida (`lifePoints`). Se o dano calculado (`damage`) for igual ou menor a zero, você deve perder apenas `1` ponto de vida (`lifePoints`);
    - Ao receber o ataque e perder pontos de vida (`lifePoints`), e se sua vida chegar a `0` ou menos, você deve fixá-la com o valor `-1`;
    - Ao final sempre retorne o valor atualizado de seus pontos de vida.
  - **`attack 🪄`** este método recebe por parâmetro uma pessoa inimiga (`enemy`) e as regras são:
    - Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
    - Este dano deve ser equivalente a força (`strength`) de quem ataca.
  - **`levelUp 🆙`** este método não recebe parâmetro e as regras são:
    - Sempre que este método for chamado os atributos `maxLifePoints`, `strength`, `dexterity` e `defense` terão um incremento de no mínimo 1 e no máximo 10 pontos; ✨✨
    - Assim como os atributos anteriores o montante de energia (`amount` dentro de `energy`) deve ser alterado também, ele deve ficar cheio, valendo exatamente `10`;
    - O atributo `maxLifePoints` do Character **nunca poderá ser maior** que o `maxLifePoints` de sua raça (`race`). Se, ao incrementar o valor de `maxLifePoints` do Character esse valor ficar maior do que o `maxLifePoints` da raça, ele deve receber o valor igual ao do da raça. Exemplo: se o `maxLifePoints`da raça é 100, e o do Character é 95, e ao fazer o levelUp ele ficaria 8 pontos maior, isso daria 103, que é maior do que o da raça, portanto você deveria deixar em 100.
    - Ao final, o atributo `lifePoints` também deve ser atualizado, recebendo o novo valor de `maxLifePoints` (de acordo com as regras anteriores).
  - **`special ⚡`** este método não recebe parâmetro e as regras é você quem decide:
    - Aqui você pode expandir sua mente e realizar a lógica que achar mais interessante para um ataque especial, use tudo que aprendeu no mundo de T&D! :dragon_face:
    - Esta parte do requisito não esta sendo avalida é apenas para você se divertir aprendendo. 💚

✨ Dica de mestre: ✨
- Para gerar valores aleatórios, use a função `getRandomInt` fornecida no arquivo `src/utils.ts`.

</p>
</details>

---

**8 - Crie a interface `SimpleFighter`**

<details><summary>Detalhes</summary>
<p>

> Crie uma `interface` chamada `SimpleFighter`;
> O arquivo `SimpleFighter.ts` deve ser criado no diretório `src/Fighter/`.
> A interface deverá possuir os atributos:
  - `lifePoints`, do tipo `number`;
  - `strength`, do tipo `number`.
> A interface deverá possuir os métodos:
  - `attack()` que recebe um `enemy` do tipo `SimpleFighter` como parâmetro e não possui retorno (`void`);
  - `receiveDamage()` que recebe um `attackPoints` do tipo `number` como parâmetro e retorne um `number`;

</p>
</details>

---

## Sobre o curso da Trybe
O programa total de estudo conta com mais de 1.500 horas de aulas presenciais e online,divididas ao longo de 12 meses. O conteúdo aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.