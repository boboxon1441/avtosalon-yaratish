window.addEventListener('DOMContentLoaded', ()=>{
	class MenuCard{
		constructor(src,alt,title,descr,prise,parentSelector, ...classes){
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.prise = prise;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 10.0;
			this.changeToUSD()
		}
		
		changeToUSD(){
			this.prise = this.prise / this.transfer
		}

		render() {
			const element = document.createElement('div')

			if(this.classes.length === 0){
				this.classes = 'menu_item'
				element.classList.add(this.classes)
			}else{this.classes.forEach(ClassName=>element.classList.add(ClassName))}

			element.innerHTML = `
				<div class="menu__item">
					<img src="${this.src}" alt="${this.alt}">
						<h3 class="menu__item-subtitle">${this.title}</h3>
						<div class="menu__item-descr">${this.descr}</div>
						<div class="menu__item-divider"></div>
						<div class="menu__item-price">
							<div class="menu__item-cost">Narxi:</div>
							<div class="menu__item-total"><span>${this.prise}</span> $</div>
						</div>
				</div>
			`

			this.parent.append(element)
		}
	}

	new MenuCard(
		'img/tabs/audi.jpg',
		'audi',
		'Audi',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro alias provident maiores repudiandae voluptatem libero corrupti perferendis, amet quos atque, cupiditate ea perspiciatis quidem? Suscipit autem aut magni temporibus.',
		100000,
		'.menu .container'
		
	).render()

	new MenuCard(
		'img/tabs/bmw.jpg',
		'bmw',
		'BMW',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro alias provident maiores repudiandae voluptatem libero corrupti perferendis, amet quos atque, cupiditate ea perspiciatis quidem? Suscipit autem aut magni temporibus.',
		130000,
		'.menu .container'
		
	).render()

	new MenuCard(
		'img/tabs/merc.jpg',
		'merc',
		'Mers',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro alias provident maiores repudiandae voluptatem libero corrupti perferendis, amet quos atque, cupiditate ea perspiciatis quidem? Suscipit autem aut magni temporibus.',
		170000,
		'.menu .container'
		
	).render()

	
})