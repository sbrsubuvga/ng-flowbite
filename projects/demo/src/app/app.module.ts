import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFlowbiteModule } from '@ng-flowbite/ng-flowbite';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TableOfContentsComponent } from './shared/table-of-contents/table-of-contents.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ComponentsDemoComponent, ModalContentComponent, DrawerContentComponent } from './components/components-demo.component';
import { FormsDemoComponent } from './forms/forms-demo.component';
import { TypographyDemoComponent } from './typography/typography-demo.component';
import { CodeExampleComponent } from './shared/code-example/code-example.component';
import { DemoWrapperComponent } from './shared/components/demo-wrapper/demo-wrapper.component';
import { CodeSyntaxWrapperComponent } from './shared/components/code-syntax-wrapper/code-syntax-wrapper.component';

// Component demos
import { AccordionDemoComponent } from './components/accordion-demo.component';
import { AlertsDemoComponent } from './components/alerts-demo.component';
import { AvatarDemoComponent } from './components/avatar-demo.component';
import { BadgeDemoComponent } from './components/badge-demo.component';
import { BannerDemoComponent } from './components/banner-demo.component';
import { BottomNavigationDemoComponent } from './components/bottom-navigation-demo.component';
import { BreadcrumbDemoComponent } from './components/breadcrumb-demo.component';
import { ButtonGroupDemoComponent } from './components/button-group-demo.component';
import { ButtonsDemoComponent } from './components/buttons-demo.component';
import { CardDemoComponent } from './components/card-demo.component';
import { CarouselDemoComponent } from './components/carousel-demo.component';
import { ChatBubbleDemoComponent } from './components/chat-bubble-demo.component';
import { ClipboardDemoComponent } from './components/clipboard-demo.component';
import { DatepickerDemoComponent } from './components/datepicker-demo.component';
import { DeviceMockupsDemoComponent } from './components/device-mockups-demo.component';
import { DrawerDemoComponent, DrawerContentComponent as DrawerDemoContentComponent } from './components/drawer-demo.component';
import { DropdownsDemoComponent } from './components/dropdowns-demo.component';
import { FooterDemoComponent } from './components/footer-demo.component';
import { GalleryDemoComponent } from './components/gallery-demo.component';
import { IndicatorsDemoComponent } from './components/indicators-demo.component';
import { JumbotronDemoComponent } from './components/jumbotron-demo.component';
import { KbdDemoComponent } from './components/kbd-demo.component';
import { ListGroupDemoComponent } from './components/list-group-demo.component';
import { MegaMenuDemoComponent } from './components/mega-menu-demo.component';
import { ModalDemoComponent, ModalContentComponent as ModalDemoContentComponent } from './components/modal-demo.component';
import { NavbarDemoComponent } from './components/navbar-demo.component';
import { PaginationDemoComponent } from './components/pagination-demo.component';
import { ProgressDemoComponent } from './components/progress-demo.component';
import { QrCodeDemoComponent } from './components/qr-code-demo.component';
import { RatingDemoComponent } from './components/rating-demo.component';
import { SidebarDemoComponent } from './components/sidebar-demo.component';
import { SkeletonDemoComponent } from './components/skeleton-demo.component';
import { SpeedDialDemoComponent } from './components/speed-dial-demo.component';
import { SpinnerDemoComponent } from './components/spinner-demo.component';
import { StepperDemoComponent } from './components/stepper-demo.component';
import { TableDemoComponent } from './components/table-demo.component';
import { TabsDemoComponent } from './components/tabs-demo.component';
import { TimelineDemoComponent } from './components/timeline-demo.component';
import { ToastDemoComponent } from './components/toast-demo.component';
import { VideoDemoComponent } from './components/video-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/getting-started', pathMatch: 'full' },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'components', component: ComponentsDemoComponent },
  { path: 'components/accordion', component: AccordionDemoComponent },
  { path: 'components/alerts', component: AlertsDemoComponent },
  { path: 'components/avatar', component: AvatarDemoComponent },
  { path: 'components/badge', component: BadgeDemoComponent },
  { path: 'components/banner', component: BannerDemoComponent },
  { path: 'components/bottom-navigation', component: BottomNavigationDemoComponent },
  { path: 'components/breadcrumb', component: BreadcrumbDemoComponent },
  { path: 'components/buttons', component: ButtonsDemoComponent },
  { path: 'components/button-group', component: ButtonGroupDemoComponent },
  { path: 'components/card', component: CardDemoComponent },
  { path: 'components/carousel', component: CarouselDemoComponent },
  { path: 'components/chat-bubble', component: ChatBubbleDemoComponent },
  { path: 'components/clipboard', component: ClipboardDemoComponent },
  { path: 'components/datepicker', component: DatepickerDemoComponent },
  { path: 'components/device-mockups', component: DeviceMockupsDemoComponent },
  { path: 'components/drawer', component: DrawerDemoComponent },
  { path: 'components/dropdowns', component: DropdownsDemoComponent },
  { path: 'components/footer', component: FooterDemoComponent },
  { path: 'components/gallery', component: GalleryDemoComponent },
  { path: 'components/indicators', component: IndicatorsDemoComponent },
  { path: 'components/jumbotron', component: JumbotronDemoComponent },
  { path: 'components/kbd', component: KbdDemoComponent },
  { path: 'components/list-group', component: ListGroupDemoComponent },
  { path: 'components/mega-menu', component: MegaMenuDemoComponent },
  { path: 'components/modal', component: ModalDemoComponent },
  { path: 'components/navbar', component: NavbarDemoComponent },
  { path: 'components/pagination', component: PaginationDemoComponent },
  { path: 'components/progress', component: ProgressDemoComponent },
  { path: 'components/qr-code', component: QrCodeDemoComponent },
  { path: 'components/rating', component: RatingDemoComponent },
  { path: 'components/sidebar', component: SidebarDemoComponent },
  { path: 'components/skeleton', component: SkeletonDemoComponent },
  { path: 'components/speed-dial', component: SpeedDialDemoComponent },
  { path: 'components/spinner', component: SpinnerDemoComponent },
  { path: 'components/stepper', component: StepperDemoComponent },
  { path: 'components/table', component: TableDemoComponent },
  { path: 'components/tabs', component: TabsDemoComponent },
  { path: 'components/timeline', component: TimelineDemoComponent },
  { path: 'components/toast', component: ToastDemoComponent },
  { path: 'components/video', component: VideoDemoComponent },
  { path: 'forms', component: FormsDemoComponent },
  { path: 'typography', component: TypographyDemoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TableOfContentsComponent,
    GettingStartedComponent,
    ComponentsDemoComponent,
    ModalContentComponent,
    DrawerContentComponent,
    FormsDemoComponent,
    TypographyDemoComponent,
    CodeExampleComponent,
    DemoWrapperComponent,
    CodeSyntaxWrapperComponent,
    // Component demos
    AccordionDemoComponent,
    AlertsDemoComponent,
    AvatarDemoComponent,
    BadgeDemoComponent,
    BannerDemoComponent,
    BottomNavigationDemoComponent,
    BreadcrumbDemoComponent,
    ButtonGroupDemoComponent,
    ButtonsDemoComponent,
    CardDemoComponent,
    CarouselDemoComponent,
    ChatBubbleDemoComponent,
    ClipboardDemoComponent,
    DatepickerDemoComponent,
    DeviceMockupsDemoComponent,
    DrawerDemoComponent,
    DrawerDemoContentComponent,
    DropdownsDemoComponent,
    FooterDemoComponent,
    GalleryDemoComponent,
    IndicatorsDemoComponent,
    JumbotronDemoComponent,
    KbdDemoComponent,
    ListGroupDemoComponent,
    MegaMenuDemoComponent,
    ModalDemoComponent,
    ModalDemoContentComponent,
    NavbarDemoComponent,
    PaginationDemoComponent,
    ProgressDemoComponent,
    QrCodeDemoComponent,
    RatingDemoComponent,
    SidebarDemoComponent,
    SkeletonDemoComponent,
    SpeedDialDemoComponent,
    SpinnerDemoComponent,
    StepperDemoComponent,
    TableDemoComponent,
    TabsDemoComponent,
    TimelineDemoComponent,
    ToastDemoComponent,
    VideoDemoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgFlowbiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

