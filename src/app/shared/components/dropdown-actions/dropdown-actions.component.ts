import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { OptionModelDropdown, EOptionDropdown } from './models/dropdown-actions.model';
import { DropdownService } from './services/dropdown-actions.service';
import { faEllipsisVertical, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown-actions',
  templateUrl: './dropdown-actions.component.html',
  styleUrls: ['./dropdown-actions.component.scss']
})
export class DropdownActionsComponent implements OnInit {

  //Icons
  faEllipsisVertical = faEllipsisVertical;
  faEye = faEye;
  faEdit = faEdit;
  faTrash = faTrash;


  @Input() idItem!: number;
  isOpen!: boolean;
  baseUrl!: string;

  options: OptionModelDropdown[] = [
    {
      title: 'Visualizar',
      icon: this.faEye,
      linkUrl: 'Consultar'
    },
    {
      title: 'Editar',
      icon: this.faEdit,
      linkUrl: 'editar'
    },
    {
      title: 'Deletar',
      icon: this.faTrash,
      linkUrl: 'deletar'
    },
  ];

  constructor(
    private dropdownService: DropdownService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.closeDropdownOpen();
    this.getUrl();
  }

  getUrl(){
    this.baseUrl = this.router.url
  }

  closeDropdownOpen(){
    this.dropdownService.dropdownStateChanged.subscribe(() => {
      if (this.dropdownService.getOpenDropdown() !== this) {
        this.isOpen = false;
      }
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dropdownService.setOpenDropdown(this);
    }
  }
  
  selectOption(option: OptionModelDropdown) {
    switch (option.title) {
      case EOptionDropdown.editar:
        this.router.navigate([`${this.baseUrl}/editar/${this.idItem}`]);
        break;
      case EOptionDropdown.visualizar:
        this.router.navigate([`${this.baseUrl}/consultar/${this.idItem}`]);
        break;
      case EOptionDropdown.deletar:
        // set the logic
        break;
      default:
        break;
    }
    this.toggleDropdown();
  }

}
