Vue.component("main-menu", {
  template: `
    <div class="wrap">
        <table v-show="isVisible">
          <tr>
            <td colspan="2" class="menu_td">Меню</td>
          </tr>
          <tr>
            <td><label for="zakuska">Закуска</label></td>
            <td><select v-model="selectedZakuska" id="zakuska"  @change="totalPrice">
                  <option disabled value=""> - выберите - </option>
                  <option v-for="option in zakuskaOptions" :value="option">{{option.title}}</option>                  
                </select>
            </td>
          </tr>
          <tr>
            <td><label for="first_meal">Первое блюдо</label></td>
            <td><select v-model="selectedFirstMeal" id="first_meal" @change="totalPrice" >
                  <option disabled value=""> - выберите - </option>
                  <option v-for="option in firstMealOptions" :value="option">{{option.title}}</option>
                  
                </select>
            </td>
          </tr>
          <tr>
            <td><label for="second_meal">Второе блюдо</label></td>
            <td><select v-model="selectedSecondMeal" id="second_meal" @change="totalPrice" >
                  <option disabled value=""> - выберите - </option>
                  <option v-for="option in secondMealOptions" :value="option">{{option.title}}</option>
                  
                </select>
            </td>
          </tr>
          <tr>
            <td><label for="dessert">Десерт</label></td>
            <td><select v-model="selectedDessert" id="dessert" @change="totalPrice">
                  // <option disabled value=""> - выберите - </option>
                  <option v-for="option in dessertOptions" :value="option"> {{option.title}} </option>
                  
                </select>
            </td>
          </tr>
          <tr>
            <td><label for="drinks">Напитки</label></td>
            <td>
              <div class="bloc">
                <select v-model="selectedDrinks" id="drinks" @change="totalPrice" multiple>
                 <option v-for="option in drinkOptions" :value="option"> {{option.title}} </option>
                </select>
              </div>
            </td>
          </tr>
        </table>
        <div id="totalPrice">Всего: {{total}} грн.</div>
        <div class="wrapper">
          <input type="button" value="Чек" class="btn-check" v-show="isVisible" @click="showCheck">
          <input type="button" value="Сбросить" class="btn-check" @click="resetMenu">
        </div>
        <div class="check" v-show="isDisplayed">
        <ul>
          <li>Закуска: {{ selectedZakuska.title }}; <br> цена: {{ selectedZakuska.price }} грн.</li>
          <li>Первое: {{ selectedFirstMeal.title }}; <br>цена: {{ selectedFirstMeal.price }} грн.</li>
          <li>Второе: {{ selectedSecondMeal.title }};<br> цена: {{ selectedSecondMeal.price }} грн.</li>
          <li>Дессерт: {{ selectedDessert.title }};<br> цена: {{ selectedDessert.price }} грн.</li>        
          <li>Напиток: {{ getDrinkTitles }};<br> цена: {{ getDrinksPrice }} грн.</li>
        </ul>
        <!-- <p> total: {{total}} </p> -->
      </div>
    </div>
  `,

  data() {
    return {
      isVisible: true,
      isDisplayed: false,
      selectedZakuska: {
        price: 0,
        title: ""
      },
      zakuskaOptions: [
        {
          price: 50,
          title: "Салат"
        },
        {
          price: 20,
          title: "Сэндвич"
        }
      ],
      selectedFirstMeal: {
        price: 0,
        title: ""
      },
      firstMealOptions: [
        {
          price: 70,
          title: "Борщ"
        },
        {
          price: 60,
          title: "Суп"
        },
        {
          price: 40,
          title: "Окрошка"
        },
        {
          price: 50,
          title: "Харчо"
        }
      ],
      selectedSecondMeal: {
        price: 0,
        title: ""
      },
      secondMealOptions: [
        {
          price: 10,
          title: "Каша"
        },
        {
          price: 25,
          title: "Котлета"
        },
        {
          price: 5,
          title: "Мивина"
        },
        {
          price: 15,
          title: "Пюре"
        }
      ],
      selectedDessert: {
        price: 0,
        title: ""
      },
      dessertOptions: [
        {
          price: 30,
          title: "Мороженное"
        },
        {
          price: 40,
          title: "Брауни"
        },
        {
          price: 20,
          title: "Мусс"
        }
      ],
      selectedDrinks: [],
      drinkOptions: [
        {
          price: 12,
          title: "Кола"
        },
        {
          price: 14,
          title: "Фанта"
        },
        {
          price: 15,
          title: "Сок"
        },
        {
          price: 10,
          title: "Пиво"
        }
      ],
      total: 0
    };
  },

  methods: {
    resetMenu() {
      this.selectedZakuska = {
        price: 0,
        title: ""
      };
      this.selectedFirstMeal = {
        price: 0,
        title: ""
      };
      this.selectedSecondMeal = {
        price: 0,
        title: ""
      };
      this.selectedDessert = {
        price: 0,
        title: ""
      };
      this.selectedDrinks = [];
      this.total = 0;
      this.isDisplayed = false;
      this.isVisible = true;
    },
    totalPrice() {
      let drinks = this.getDrinksPrice;
      // console.log(drinks);
      // let sumDrinks = drinks.reduce((a, b) => a + b, 0);
      console.log(this.selectedZakuska.price, this.selectedFirstMeal);
      let zakuska = this.selectedZakuska.price;
      let first = this.selectedFirstMeal.price;
      let second = this.selectedSecondMeal.price;
      let dessert = this.selectedDessert.price;
      console.log(zakuska, first, second, dessert, drinks);

      this.total = zakuska + first + second + dessert + drinks;
      console.log(this.total);
    },
    showCheck() {
      this.isDisplayed = true;
      this.isVisible = false;
    }
  },

  computed: {
    getDrinksPrice() {
      return this.selectedDrinks
        .map(prices => prices.price)
        .reduce((a, b) => a + b, 0);
    },
    getDrinkTitles() {
      return this.selectedDrinks.map(titles => titles.title).join(", ");
    }
  }
});

let vm = new Vue({
  el: ".app"
});
