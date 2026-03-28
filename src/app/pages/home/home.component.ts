import { Component, ElementRef, ViewChild } from '@angular/core';
import { headerTabs } from 'src/models/headerTabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activeTab: string = headerTabs.home;
  services: {
    name: string,
    caption: string,
    description: string,
    icon: string,
    hovered: boolean
  }[] = [
    {
      name: "Fintech Platforms",
      caption: "Secure Financial Architectures",
      description: "Developing robust CRM and client portals for forex brokers with MT4/MT5 integration and real-time trading data synchronization.",
      icon: "assets/services-icons/app-development.webp",
      hovered: false
    },
    {
      name: "Blockchain Integration",
      caption: "Crypto Payment Gateways",
      description: "Building cryptocurrency payment systems and exchange platforms with multi-chain support for deposits, withdrawals, and staking.",
      icon: "assets/services-icons/responsive-design.webp",
      hovered: false
    },
    {
      name: "Enterprise Solutions",
      caption: "Scalable Large-Scale Systems",
      description: "Engineering CRM and HR platforms tailored for thousands of interactions monthly using modular component architectures.",
      icon: "assets/services-icons/optimization.webp",
      hovered: false
    },
    {
      name: "High-Traffic Engineering",
      caption: "Performance Optimization",
      description: "Optimizing lead management and real-time tracking (phone, email, SMS, WhatsApp) to handle heavy data loads and boost conversion.",
      icon: "assets/services-icons/cross-platform.webp",
      hovered: false
    },
    {
      name: "Real-Time Systems",
      caption: "Socket & WebSocket Integration",
      description: "Implementing real-time communication modules and email notification systems for critical fire and security platforms.",
      icon: "assets/services-icons/performance.webp",
      hovered: false
    },
    {
      name: "Full-Stack Development",
      caption: "End-to-End Scalability",
      description: "Specializing in the MEARN stack to create seamless, data-driven applications that ensure secure and smooth flow for traders.",
      icon: "assets/services-icons/maintenance.webp",
      hovered: false
    },
  ]

  setActiveTab(tab: string) {
    this.activeTab = tab
  }

}
