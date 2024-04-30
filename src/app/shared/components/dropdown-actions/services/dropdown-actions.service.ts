import { Injectable, EventEmitter } from '@angular/core';
import { DropdownActionsComponent } from '../dropdown-actions.component';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private openDropdown: DropdownActionsComponent | null = null;
  dropdownStateChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  setOpenDropdown(dropdown: DropdownActionsComponent | null) {
    this.openDropdown = dropdown;
    this.dropdownStateChanged.emit(); // Emitir o evento quando o dropdown é alterado
  }

  getOpenDropdown() {
    return this.openDropdown;
  }
}
