/*Task:
Планете Темпос сегодня 1000 лет. На календаре 10.01.1001, среда. Поселение было основано в воскресенье.
В календаре Темпоса есть небольшие отличия от земного. 12 месяцев по 28 дней. 
А в феврале високосного года 29. 
Год будет считается високосным если он кратен 5, но из тех что кратны 100 високосными будут только те, что кратны 500.
Например 200, 300, 400 - невисокосный, 500 - високосный.
Определите какой день недели на Темпосе по любой заданной дате.*/

const Btn = document.querySelector('button');
Btn.addEventListener('click', () => {
   const todayYear = +document.getElementById('year').value;
   const todayMonth = +document.getElementById('month').value;
   const todayDay = +document.getElementById('day').value;
   DateName(todayYear, todayMonth, todayDay);
})


function DateName(Y, M, D) {
   let weekday = ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'monday'];
   let day;
   let countDay;
   let VysY = 0;
   let con;

   // проверка введенных данных
   if ((M >= 0 && M > 12) || (D < 0 && D >= 29)) {
      alert("Enter month from 1 to 12 inclusive and date from 1 to 29 inclusive")
   } else
      // подсчет всех высокостных годов от начала отсчета до введенной даты
      for (let i = 1; i <= Y; i++) {
         if (((i % 5) === 0) && (((i % 500) === 0)) || ((i % 100) !== 0)) {
            VysY++;
         }
      }
   // вычисление количества дней с нулевой точки отсчета с учетом высокостных годов
   countDay = (28 * 12 * (Y - 1)) + ((M - 1) * 28) + (D - 1) + VysY;;

   if ((Y % 5) === 0) {
      if ((((Y % 500) === 0)) || (Y % 100) !== 0) {
         if (M < 3) {
            con = countDay - 1;
            countDay = con;
         }
      }
   }

   let result = (countDay % 7);
   day = weekday[result];
   weekDay.innerHTML = day;
   console.log(day);
}
