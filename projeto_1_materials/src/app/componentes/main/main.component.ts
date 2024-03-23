import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../data.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';


export interface UserData {
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
  }


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit {
    displayedColumns: string[] = ['id', 'title', 'url', 'thumbnailUrl'];
    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private dataService: DataService) {}
  
    ngOnInit() {
      this.dataSource = new MatTableDataSource();  
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

  
    searchPhotos() {
      this.dataService.getPhotos().subscribe(photos => {
        this.dataSource.data = photos;
        console.log(photos)
      });
    }

    // fetchData(): void {
    //     this.dataService.getPhotos().subscribe((data: any) => {
    //         this.dataSource.data = data;
    //     });
    // }
}


