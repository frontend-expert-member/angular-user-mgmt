import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

import { UserService } from "@app/_shared/user.service";
import { User, Users } from "./user";

@Component({
  selector: "app-users",
  standalone: true,
  imports: [CommonModule, MatTableModule, HttpClientModule],
  providers: [UserService],
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class UsersComponent {
  dataSource: Users[] = [];
  response: any[] = [];
  columnsToDisplay = ['id', 'firstName', 'lastName', 'age', 'gender', 'email', 'phone', 'username', 'birthDate'];

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((data) => {
      this.dataSource = data.users;
    });
  }

  toggleRow(element: { expanded: boolean }) {
    element.expanded = !element.expanded;
  }

  manageAllRows(flag: boolean) {
    this.dataSource.forEach((row) => {
      //row["expanded"] = flag;
    });
  }
}
