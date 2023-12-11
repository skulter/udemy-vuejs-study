- 1일차
  vue.js는 선언형 접근방식을 사용한다.
  선언형 접근방식은 우리는 렌더링에 대한 것들의 플레이스 홀더만 지정해주고 렌더링과 같은 내부적인 동작은 vue.js가 알아서 해준다. (개발자가 목표를 설정하면 중간단계는 신경쓰지 않아도 된다.)
  `**v-??? 라고 하는것들은 뷰 디렉티브라고 한다.**`
  `v-bind` html 속성에서 vue의 데이터를 사용할때 사용하며
  `{{}}` 과 같은 방식으로 vue의 데이터를 지정해 주는 것을 보간법이라고 한다.
  `data`는 컴포넌트의 상태(state)를 관리하는 데 사용되며, `methods`는 컴포넌트의 동작(behavior)을 관리하는 데 사용된다.
  `v-on` 이벤트앞에 적어준다.
  ```
  <button v-on:click="add">Add</button>
  <button v-on:click="reduce">Reduce</button>
  ```
  `$event` 는 vue가 제공하는 인수로써 브라우저를 통해 자동으로 얻는 기본 내장 이벤트 객체에 대한 액세스를 제공해준다.
  ```jsx
  <input type="text" v-on:input="setName($event,'kim')">
  methods: {
      setName(e, lastname) {
        this.name = lastname + e.target.value;
      },
  }
  ```
  `이벤트 수식어` vue에서 제공하는 이벤트 수식어가 몇가지 있다. vue 공식문서에서 확인 가능하다.
  여기서는 form의 submit을 하면 `e.preventDefault();` 를 vue에서 제공하는 이벤트 수식어를 배웠다.
  아래 두 코드는 브라우저의 기본 기능을 사용하지 않게하는 코드이지만 vue에서 제공하는 이벤트 수식어를 사용하는것이 코드가 더 깔끔한것을 알 수있다.
  ```jsx
  <form v-on:submit.prevent="submitForm">

  methods: {
      submitForm() {
        console.log("코드");
      },
  }
  ```
  ```jsx
  <form v-on:submit="submitForm">

  methods: {
      submitForm(e) {
  			e.preventDefault();
        console.log("코드");
      },
  }
  ```
  마우스 이벤트에는 `.right` 의 이벤트 수식어를 사용하면 마우스 오른쪽 클릭을 사용한다.µ
  ```jsx
  <button v-on:click.right="reduce">Reduce</button>
  ```
  키보드 입력 이벤트에는 input, keyup 뒤에 `.enter` `.ctrl` 등의 아무 키보드와 매칭되는 이벤트 수식어를 사용하게되면 해당 키가입력될때 할당된 이벤트가 실행된다.
  ```jsx
  <input type="text" v-on:input="setName($event,'kim')" v-on:keyup.enter="confirmInput">
  ```
  `v-once`
  요소의 보간법을 한번 (초기값)으로만 평가하도록 할 때
  만약 앱에서 카운터를 변경할때 `Starting Counter Value`와 변경된 `Counter`를 보고싶다고 하였을때(하지만 같은 counter를 참조한다)
  `Starting Counter`는 바꾸고 싶지 않을 수 있다.
  ```jsx
  <p v-once>Starting: {{ counter }}</p>
  <p>Result: {{ counter }}</p>
  ```
  Add 버튼을 누른 후 Starting은 변경되지 않았지만 Result는 변경되었다.
  - 기본값은 20인 상태이다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/40ad9795-bd11-4974-8806-264b002d2633/5061dfdb-2897-4ab9-abc6-607fefc34d66/Untitled.png)
  `**v-model**`
  ```jsx
  <input type="text" v-bind:value="name" v-on:input="setName($event, 'Schwarzmüller')">
  <input type="text" v-model="name">
  ```
  위 두개의 코드는 같은 기능을 한다.
  즉 `v-model` 디렉티브는 `v-bind:value”name”`와 `v-on:input="setName($event, 'Schwarzmüller')"` 두개의 디렉티브를 사용한것과 같은 효과가 있다.
  - `v-model` 공식 문서 설명
