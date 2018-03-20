import {
  Directive,
  ElementRef,
  OnInit,
  AfterViewInit, OnDestroy
} from '@angular/core';

import {
  Router,
  NavigationEnd
} from '@angular/router';
import {
  Subscription
} from 'rxjs/Subscription';

declare var $: any;

@Directive({
  selector: '[kdncSmartMenu]'
})
export class SmartMenuDirective implements OnInit, AfterViewInit, OnDestroy {

  private $menu: any;
  private layoutSub: Subscription;
  private routerSub: Subscription;

  constructor(
    private menu: ElementRef,
    private router: Router
  ) {
    this.$menu = $(this.menu.nativeElement);
  }

  ngOnInit() {

    // collapse menu on mobiles
    $('[routerLink]', this.$menu).on('click', () => {
    });

  }

  ngAfterViewInit() {
    this.$menu.find('li:has(> ul)').each((i, li) => {
      const $menuItem = $(li);
      const $a = $menuItem.find('>a');
      const sign = $('<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>');

      $a.on('click', (e) => {
        this.toggle($menuItem);
        e.stopPropagation();
        return false;
      }).append(sign);
    });

    setTimeout(() => {
    }, 200);


  }

  ngOnDestroy() {
    this.layoutSub.unsubscribe();
  }

  private processLayout = (layoutStore) => {
    if (layoutStore.menuOnTop) {
      this.$menu.find('li.open').each((i, li) => {
        this.toggle($(li), false);
      });
    } else {
      this.$menu.find('li.active').each((i, li) => {
        $(li).parents('li').each((j, parentLi) => {
          this.toggle($(parentLi), true);
        });
      });
    }

    if (layoutStore.mobileViewActivated) {
      $('body').removeClass('minified');
    }
  }

  private toggle($el, condition = !$el.data('open')) {
    $el.toggleClass('open', condition);

    if (condition) {
      $el.find('>ul').slideDown();
    } else {
      $el.find('>ul').slideUp();
    }

    $el.find('>a>.collapse-sign>em')
      .toggleClass('fa-plus-square-o', !condition)
      .toggleClass('fa-minus-square-o', condition);

    $el.data('open', condition);

    if (condition) {
      $el.siblings('.open').each((i, it) => {
        const sib = $(it);
        this.toggle(sib, false);
      });
    }
  }

}
