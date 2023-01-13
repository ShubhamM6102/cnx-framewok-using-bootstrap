import { ThemeService } from './services/theme/theme.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import{MaterialModule}  from'angular-material-config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponentComponent } from './modules/components/cnx-header-component/header-component.component';
import { TypographyComponent } from './core/contents/typography/typography.component';
import { ColorsComponent } from './core/customize/colors/colors.component';
import { ButtonsComponent } from './core/components/buttons/buttons.component';
import { CheckBoxComponent } from './core/components/check-box/check-box.component';
import { RadioButtonComponent } from './core/components/radio-button/radio-button.component';
import { ToggleSwitchComponent } from './core/components/toggle-switch/toggle-switch.component';
import { FormsComponent } from './core/components/forms/forms.component';
import { TextAreaComponent } from './core/components/text-area/text-area.component';
import { DropDownComponent } from './core/components/drop-down/drop-down.component';
import { SidebarMenuComponent } from './modules/layouts/sidebar-layout/sidebar-menu/sidebar-menu.component';
import { SidebarLayoutComponent } from './modules/layouts/sidebar-layout/sidebar-layout/sidebar-layout.component';
import { MainSectionComponent } from './modules/layouts/sidebar-layout/main-section/main-section.component';
import { SelectComponent } from './core/components/select/select.component';
import { NavBarComponent } from "./modules/components/header/nav-bar/nav-bar.component";
import { HeaderDropdownComponent } from './modules/components/header/header-dropdown/header-dropdown.component';
import { HeaderComponent } from './modules/components/header/header/header.component';
import { SearchBarComponent } from './core/components/search-bar/search-bar.component';
import { SearchSectionComponent } from './modules/components/search-section/search-section.component';
import { ProductsSectionComponent } from './modules/components/products-section/products-section.component';
import {MatIconModule} from '@angular/material/icon';
import { ViewAllButtonComponent } from './core/components/view-all-button/view-all-button.component';
import { CalculatorSectionComponent } from './modules/components/calculator-section/calculator-section.component';
import { ReadSectionComponent } from './modules/components/read-section/read-section.component';
import { OtherInfoSectionComponent } from './modules/components/other-info-section/other-info-section.component';
import { OffersSectionComponent } from './modules/components/offers-section/offers-section.component';
import { CarouselSectionComponent } from './modules/components/carousel-section/carousel-section.component';
import { CarouselComponent } from './core/components/carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';
import { CardCarouselComponent } from './core/components/card-carousel/card-carousel.component';
import { ContactUsComponent } from './modules/components/footer-component/contact-us/contact-us.component';
import { ShareholderComponent } from './modules/components/footer-component/shareholder/shareholder.component';
import { MediaComponent } from './modules/components/footer-component/media/media.component';
import { OtherLinksComponent } from './modules/components/footer-component/other-links/other-links.component';
import { NodalDeskComponent } from './modules/components/footer-component/nodal-desk/nodal-desk.component';
import { FooterComponent } from './modules/components/footer-component/footer/footer.component';
import { CopyRightComponent } from './modules/components/footer-component/copy-right/copy-right.component';
import { HorizontalLayoutComponent } from './modules/layouts/horizontal-layout/horizontal-layout.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { OverlayComponent } from './modules/components/overlay/overlay.component';
//import { MainSectionComponent } from './modules/layouts/sidebar-layout/main-section/main-section.component';
//import { SelectComponent } from './core/components/select/select.component';
import { InputFormComponent } from './core/components/input-form/input-form.component';
import { InputIconComponent } from './core/components/input-icon/input-icon.component';
import { InputTitleComponent } from './core/components/input-title/input-title.component';
import { InputTitleIconComponent } from './core/components/input-title-icon/input-title-icon.component';
import { InputPasswordComponent } from './core/components/input-password/input-password.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponentComponent,
        TypographyComponent,
        ColorsComponent,
        ButtonsComponent,
        CheckBoxComponent,
        RadioButtonComponent,
        ToggleSwitchComponent,
        FormsComponent,
        TextAreaComponent,
        DropDownComponent,
        SidebarMenuComponent,
        SidebarLayoutComponent,
        MainSectionComponent,
        SelectComponent,
        NavBarComponent,
        HeaderDropdownComponent,
        HeaderComponent,
        SearchBarComponent,
        SearchSectionComponent,
        ProductsSectionComponent,
        ViewAllButtonComponent,
        CalculatorSectionComponent,
        ReadSectionComponent,
        OtherInfoSectionComponent,
        OffersSectionComponent,
        CarouselSectionComponent,
        CarouselComponent,
        CardCarouselComponent,
        ContactUsComponent,
        ShareholderComponent,
        MediaComponent,
        OtherLinksComponent,
        NodalDeskComponent,
        FooterComponent,
        CopyRightComponent,
        HorizontalLayoutComponent,
        HomePageComponent,
        DashboardComponent,
        OverlayComponent,
        InputPasswordComponent ,
        InputTitleIconComponent ,
        InputTitleComponent,
        InputIconComponent,
        InputFormComponent



    
    ],
    providers: [ThemeService],
    bootstrap: [AppComponent],
    exports: [],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        //MaterialModule,
        NgbModule,
        FontAwesomeModule,
        MatIconModule,
        SwiperModule
     
    ]
})
export class AppModule { }
