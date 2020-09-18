const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);

/*
 * Document.querySelector* и Element.querySelector*/
// const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// magicBtn.addEventListener('click', () => {
const imageEl = document.querySelector('.hero__image');
//   console.log('imageEl', imageEl);
//   console.log(imageEl.src);
//   imageEl.src =
//     'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
//   imageEl.alt = 'Это новый котик';

const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl);
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'Я сладкий пирожочек!';
// });

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибуты
 */
const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[1].dataset.action);
