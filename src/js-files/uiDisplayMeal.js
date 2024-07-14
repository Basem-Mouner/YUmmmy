export default class UiDisplayMeal {

    constructor() {
            //   this.fullname = fName;
        }
        // ===========================DISPLAY  home meal[cards]==========================
    displayCards(Array) {
            let box_contanier = '';

            for (let i = 0; i < Array.length; i++) {

                box_contanier += `
                <div class="outerCard w-full md:w-4/12 lg:w-3/12  p-3  group">
                <div class="cardMeal relative  overflow-hidden cursor-pointer">
                    <img src=${Array[i].strMealThumb} class="w-full rounded-xl" alt="...">
                    <div class="cardLayout  flex items-center p-5 translate-y-full group-hover:-translate-y-0 group-hover:duration-[1s]">
                        <h4 class="">${Array[i].strMeal}</h4>
                    </div>
                </div>
            </div>
            `
            }
            document.getElementById('Cards-home').innerHTML = box_contanier;
        }
        // ===========================DISPLAY Meal==========================

    // ===========================DISPLAY mealCategory[cards]==========================
    displayCatCards(Array) {
            let box_contanier = '';

            for (let i = 0; i < Array.length; i++) {

                box_contanier += `
            <div class="outerCard w-full md:w-4/12 lg:w-3/12  p-3 group  ">
            <div class="cardMeal relative  overflow-hidden cursor-pointer">
                <img src=${Array[i].strCategoryThumb} class="w-full rounded-xl" alt="...">
                <div class="cardLayout leading-1 p-3 translate-y-full group-hover:-translate-y-0 group-hover:duration-[1s] prose">
                    <h6 class=" text-center mb-7">${Array[i].strCategory}</h6>
                    <p class="line-clamp-4 text-[12px] m-0 ">${Array[i].strCategoryDescription}</p>
                </div>
            </div>
        </div>
        `
            }
            document.getElementById('Cards-home').innerHTML = box_contanier;
        }
        // ===========================DISPLAY mealarea[cards]==========================
    displayaAreaCards(Array) {
            let box_contanier = '';

            for (let i = 0; i < Array.length; i++) {

                box_contanier += `
        <div class="outerCard w-full md:w-4/12 lg:w-3/12  p-3 group  ">
        <div class="areaCard cardMeal    cursor-pointer text-white font-semibold text-center">
            <i class="fa-solid fa-house-laptop text-6xl"></i>
            <div class="">
                <h3 class="  mb-7 text-3xl  ">${Array[i].strArea}</h3>
            </div>
        </div>
    </div>
    `
            }
            document.getElementById('Cards-home').innerHTML = box_contanier;
        }
        // ===========================DISPLAY mealarea[cards]==========================
    displayaIngredCards(Array) {
            let box_contanier = '';

            for (let i = 0; i < 20; i++) {

                box_contanier += `
    <div class="outerCard w-full md:w-4/12 lg:w-3/12  p-3 group  ">
    <div class="areaCard cardMeal    cursor-pointer text-white font-semibold text-center">
        <i class="fa-solid fa-drumstick-bite text-5xl"></i>
        <div class="prose text-sky-500">
            <h3 class="text-blue-300  mb-7 text-2xl m-0 ">${Array[i].strIngredient}</h3>
            <p class="line-clamp-4 text-[12px] m-0 ">${Array[i].strDescription}</p>
        </div>
    </div>
</div>
`
            }
            document.getElementById('Cards-home').innerHTML = box_contanier;
        }
        // ===========================DISPLAY  details==========================
    displayDetailsMeal(object) {

            var box_contanier = `<div class="row ml-7 items-start ">
                <div class="text-right text-xl pt-2 text-white w-full  ">
                    <i class="fa-solid fa-xmark cursor-pointer" id="closeINFO"></i>
                </div>
                <div class="img_side w-full md:w-4/12 p-4 ">
                    <img src=${object.strMealThumb} class="w-full rounded-xl mb-2">
                    <h2 class="text-white text-3xl">${object.strMeal}</h2>
                </div>
                <div class="info_side  w-full md:w-8/12  ">
                    <h2 class="text-white  text-3xl font-bold">Instructions</h2>
                    <p class="text-white p-4">${object.strInstructions}</p>
                    <h3 class="text-white text-3xl font-bold my-4"><span class="">Area :</span>${object.strArea}</h3>
                    <h3 class="text-white text-3xl font-bold my-4"><span class="">Category :</span>${object.strCategory}</h3>
                    <h3 class="text-white text-3xl font-bold my-4"><span class=" ">Recipes :</span></h3>
                    <ul class="text-[#055160] row gap-3 m-4 " id="rec_ING">
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure1 +object.strIngredient1}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure2 +object.strIngredient2}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure3 +object.strIngredient3}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure4 +object.strIngredient4}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure5 +object.strIngredient5}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure6 +object.strIngredient6}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure7 +object.strIngredient7}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure8 +object.strIngredient8}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure9 +object.strIngredient9}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure10 +object.strIngredient10}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure11 +object.strIngredient11}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure12 +object.strIngredient12}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure13 +object.strIngredient13}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure14 +object.strIngredient14}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure15 +object.strIngredient15}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure16 +object.strIngredient16}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure17 +object.strIngredient17}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure18 +object.strIngredient18}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure19 +object.strIngredient19}</li>
                        <li class="px-1 py-1 bg-[#cff4fc] rounded-lg ">${object.strMeasure20 +object.strIngredient20}</li>
                    </ul>
                    <h3 class="text-white text-3xl font-bold my-4">Tags :</h3>
                    <ul class="text-[#842029] row gap-3 my-7 " id="tag_ING">
                        <li class="px-3 py-2 bg-[#f8d7da] rounded-lg ">${object.strTags}</li>
                    </ul>
                    <a href=${object.strSource} target="blank" class="text-white bg-[#1d9f62] hover:bg-[#157347] px-3 py-2 text-lg rounded-lg ">source</a>
                    <a href=${object.strYoutube} target="blank" class="text-white  bg-[#cd4350] hover:bg-[#bb2d3b] px-3 py-2  text-lg rounded-lg ml-3">youtube</a>
                </div>
            </div> `;

            document.getElementById('DETAILS').innerHTML = box_contanier;
        }
        // ===========================DISPLAY ========================
}