<template>
  <div class="hello">

      <div class="row">
        <h2>{{ msg }}</h2>
      </div>

      <div class="row">
          desordenado:
          {{ objts }}

          <div class="card" v-for="(item, index) in objts" :key="index" :class="item.order % 2 == 0 ? 'bg-blue' : 'bg-green'" >

              <button @click="justMove(index,index-1)"
                      :disabled="index==0">
                      <b>UP</b>
              </button>

              <button @click="justMove(index,index+1)"
                      :disabled="index==(objts.length-1)">
                      <b>down</b>
              </button>

              <b>{{ item.order }}</b>, {{ item.name }}

          </div>
      </div>

      <div class="row">

          <button class="btn" @click="prepareToSed()">Do it</button>

      </div>

      <div class="row">

        <br>

        <div class="card" v-for="(item, index2) in reordenated" :key="index2" :class="item.order % 2 == 0 ? 'bg-gray' : ''" >

            <!-- <button @click="justMove(index2,index2-1)"
                    :disabled="index2==0">
                    <b>UP</b>
            </button>

            <button @click="justMove(index2,index2+1)"
                    :disabled="index2==(objts.length-1)">
                    <b>down</b>
            </button> -->

            <b>{{ item.order }}</b>, {{ item.name }}

        </div>
      </div>

      <div class="row">
        <h2>vuedraggable</h2>
      </div>

      <div class="row">
        <draggable
          :list="objts"
          :disabled="!enabled"
          class="list-group"
          ghost-class="ghost"
          :move="checkMove"
          @start="dragging = true"
          @end="dragging = false"
        >
          <transition-group type="transition" :name="!drag ? 'flip-list' : null">

            <div
              class="list-group-item"
              v-for="element in objts"
              :key="element.name"
            >
              {{ element.name }}
            </div>

          </transition-group>

        </draggable>
      </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'HelloWorld',
  components: {
		draggable
	},
  data () {
    return {
      drag: false,
      enabled: true,
      msg: 'Ordenathor',
      reordenated: [],
      objts: [
        {
          name: 'nome1',
          order: 2
        },
        {
          name: 'nome2',
          order: 1
        },
        {
          name: 'nome3',
          order: 4
        },
        {
          name: 'nome4',
          order: 3
        },
        {
          name: 'nome5',
          order: 5
        },
        {
          name: 'nome6',
          order: 7
        },
        {
          name: 'nome7',
          order: 6
        },
        {
          name: 'nome8',
          order: 8
        },
        {
          name: 'nome9',
          order: 9
        },
        {
          name: 'nome10',
          order: 10
        },
      ]
    }
  },
  created: function() {

  },
  methods: {
    justMove: function (de, para){
      this.objts.move(de, para);

      console.log(de);
      console.log(para);
    },
    prepareToSed: function (){

      this.reordenated = [];

      this.objts.forEach(element => {

          // tem duas formas de fazer isso essa é uma...
          let newElement =
            {
              name: element.name,
              order: element.order
            };

          // essa é outra
          // let newElement = element;


          let theIndex = this.objts.indexOf(element);

          newElement.order = theIndex + 1;

          this.reordenated.push(newElement);

      });

      // this.reordenated;
    },
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    }
  },
  // computed: function() {
  //   // ordenated: function ()
  //   //   {
  //   //     let ord = this.objts.sort(function (a, b)
  //   //     {
  //   //       return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0);
  //   //     });
  //   //     return ord;
  //   //   }
  // },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  mounted: function() {
      Array.prototype.move = function(from, to) {
        this.splice(to, 0, this.splice(from, 1)[0]);
        return this;
      };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card{
  border: 1px solid rgb(129, 129, 129);
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
}

.bg-gray{
  background-color: rgb(172, 172, 172);
  color: #303030;
}

.bg-blue{
  background-color: rgb(114, 178, 207);
  color: #303030;
}

.bg-green{
  background-color: rgb(136, 168, 100);
  color: #ffffff;
}

.row{
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn{
  font-size: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
  max-width: 500px;
  margin: 0 auto;
}
.list-group-item {
  cursor: move;
  margin: 10px;
  border: 1px solid #1c1c1c;
  border-radius: 5px;
  padding: 10px;
}
.list-group-item i {
  cursor: pointer;
}

/* .ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group{
  max-width: 500px;
  margin: 0 auto;
}

.list-group-item{
  margin: 10px;
  border: 1px solid #1c1c1c;
  border-radius: 5px;
  padding: 10px;
} */
</style>
