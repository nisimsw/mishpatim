import {Component, ViewChild, ElementRef,AfterViewInit} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mishpatim',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    FormsModule
  ],
  templateUrl: './mishpatim.component.html',
  styleUrl: './mishpatim.component.css'
})
export class MishpatimComponent {
  search =''
    @ViewChild('TextInput2', {static: true}) TextInput2: ElementRef | undefined;
  SwitchSelector = 1
  FileArray = [{
    "file_number": 1,
    "date": '2019-8-1',
    "osek": 'בדיקת שמירה החלטה3',
    "file2": 'ערר חרב ברזל',
    "date2": '15-5-2023',
    "opening": '4-4-2021',
    "close": '20-11-2025',
    "megish": 'אברהם אברהמי',
    "mechiva": 'ישראל ישראלי',
    "yor": 'דינה וויס',
    "natsig": 'שלמה קרעי',
    "status": 'פעיל',
    "": ''
  },
    {
      "file_number": 2,
      "date": '2016-7-1',
      "osek": 'בדיקת שמירה החלטה2',
      "file2": 'ערר עופרת יצוקה',
      "date2": '15-5-2020',
      "opening": '4-4-2022',
      "close": '20-11-2022',
      "megish": 'אברהם אברהמי2',
      "mechiva": 'ישראל ישראלי',
      "yor": 'דינה וויס',
      "natsig": 'שלמה קרעי',
      "status": 'פעיל'
    },
    {
      "file_number": 3,
      "date": '2014-3-1',
      "osek": 'בדיקת שמירה החלטה5',
      "file2": 'ערר יום כיפור',
      "date2": '15-5-2021',
      "opening": '4-4-2023',
      "close": '20-11-2023',
      "megish": 'אברהם אברהמי2',
      "mechiva": 'ישראל ישראלי2',
      "yor": 'דינה וויס',
      "natsig": 'מאי גולן',
      "status": 'לא פעיל'
    },
    {
      "file_number": 4,
      "date": '2026-12-1',
      "osek": 'בדיקת שמירה החלטה6',
      "file2": 'ערר אש',
      "date2": '15-5-2022',
      "opening": '4-4-2024',
      "close": '20-11-2025',
      "megish": 'אברהם אברהמי4',
      "mechiva": 'ישראל ישראלי3',
      "yor": 'דינה וויס',
      "natsig": 'גדעון סער',
      "status": 'פעיל'
    },
    {
      "file_number": 5,
      "date": '2001-10-1',
      "osek": 'בדיקת שמירה החלטה7',
      "file2": 'ערר צוק איתן',
      "date2": '15-5-2026',
      "opening": '4-4-2025',
      "close": '20-11-20226',
      "megish": 'אברהם אברהמי',
      "mechiva": 'ישראל ישראלי4',
      "yor": 'דינה וויס',
      "natsig": 'דוד כהן',
      "status": ' לא פעיל'
    }
  ]
  FilterdArray = this.FileArray
  Alternate1 = 'Picked'
  Alternate2 = 'UnPicked'
  Alternate3 = 'UnPicked'
  Alternate4 = 'UnPicked'
  searchTerm: string = '';
  FilterSelected =1
  Search(selected: number) {
  if (selected ===1) {
    console.log(this.TextInput2?.nativeElement.value)
    this.FilterdArray = this.FileArray.filter(item => item.file_number === parseInt(this.TextInput2?.nativeElement.value),10)

  }
  if (selected ===2) {

    this.FilterdArray = this.FileArray.filter(item => item.file_number === parseInt(this.TextInput2?.nativeElement.value) && item.megish === 'אברהם אברהמי2')

  }
  if (selected ===3) {

    this.FilterdArray = this.FileArray.filter(item => item.file_number === parseInt(this.TextInput2?.nativeElement.value) && item.status=='פעיל')

  }
  if (selected ===4) {

    this.FilterdArray = this.FileArray.filter(item =>
      item.file_number === parseInt(this.TextInput2?.nativeElement.value) && item.status === 'לא פעיל')

  }
  if (this.TextInput2?.nativeElement.value===''){
    this.FilterdArray = this.FileArray
  }
  }


  Switch(selected: any) {
    if (selected === 1) {
      this.FilterSelected =1
     this.Alternate1 = 'Picked'
      this.Alternate2 = 'UnPicked'
      this.Alternate3 = 'UnPicked'
      this.Alternate4 = 'UnPicked'
      this.Search(this.FilterSelected)
    }
    if (selected === 2) {
      this.FilterSelected =2
     this.Alternate1 = 'UnPicked'
      this.Alternate2 = 'Picked'
      this.Alternate3 = 'UnPicked'
      this.Alternate4 = 'UnPicked'
      this.Search(this.FilterSelected)
    }
    if (selected === 3) {
      this.FilterSelected =3
     this.Alternate1 = 'UnPicked'
      this.Alternate2 = 'UnPicked'
      this.Alternate3 = 'Picked'
      this.Alternate4 = 'UnPicked'
      this.Search(this.FilterSelected)
    }
    if (selected === 4) {
      this.FilterSelected =4
     this.Alternate1 = 'UnPicked'
      this.Alternate2 = 'UnPicked'
      this.Alternate3 = 'UnPicked'
      this.Alternate4 = 'Picked'
      this.Search(this.FilterSelected)
    }

  }

SortId(){
   this.FilterdArray.sort((a, b) => b.file_number - a.file_number);
}
SortDate(){
    this.FilterdArray.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  console.log(`Comparing: ${a.date} with ${b.date}`);
  console.log(`Parsed Dates: ${dateA} and ${dateB}`);

  return dateA.getTime() - dateB.getTime();
});}

}

