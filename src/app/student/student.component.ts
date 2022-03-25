import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title = 'WEB207 - WE16303 - tuannda3';
  subTitle = 'Bang du lieu'
  student = {
    name: 'ducnnph10350',
    age: 22,
    phone: '0775200414',
    email: 'ducnnph10350@fpt.edu.vn',
    img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250'
  };
  students = [
    {
      id: 1,
      name: 'hung1',
      age: 22,
      phone: '0775200414',
      email: 'ducnnph10350@fpt.edu.vn',
      img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250'
    },
    {
      id: 2,
      name: 'lam1',
      age: 22,
      phone: '0775200414',
      email: 'ducnnph10350@fpt.edu.vn',
      img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250'
    },
    {
      id: 3,
      name: 'ducnnph10350',
      age: 22,
      phone: '0775200414',
      email: 'ducnnph10350@fpt.edu.vn',
      img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250'
    }
  ];
  remove(id :number){   
    this.fillterStudents = this.fillterStudents.filter(student => student.id !== id);
  }
  users  = [
    { 
      id: 1,
      ten: 'Nguyen van a',
      nang: 40,
      cao: 170,
      img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250',


    },
    { 
      id: 2,
      ten: 'Nguyen van a',
      nang: 29,
      cao: 170,
      img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250',


    },
    { 
      id: 3,
      ten: 'Nguyen van a',
      nang: 10,
      cao: 170,
      img: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf945a57aa16cea57/5db05fe7347d1c6baa57be37/RiotX_ChampionList_nautilus.jpg?quality=90&width=250',


    }
  ];
  removes(nang :number){
    if(nang>30){
      this.users = this.users.filter(user => user.nang < 30);
    }
  }
  //search
  // ... la spread: no se lay tat ca cac phan tu cua students
  // gan vao fllterStudens 
  //gan fillterstudent = gia tri cua this student
  fillterStudents = this.students;
  
  searchValue = '';
  onSearch(event :any){
    //neu gan cho this.students thi sau khi filter mang goc se bi thay doi
    //va xoa filter se khong tra ve ket qua nua
    
    //gan phan hien thi cho 1 mang moi
    //su dung mang goc de filter
    this.searchValue = event.target.value;
    this.fillterStudents = this.students.filter(student => {
      //chuyen ca value ,search text thanh viet thuong bang tolocalelowecase
      //tien hanh loai bo khoanh trang o 2 dau bang trim()
      const studentsNameLowerCase = student.name.toLocaleLowerCase();
      const searchNameLowerCase = this.searchValue.toLocaleLowerCase().trim();

      return studentsNameLowerCase.indexOf(searchNameLowerCase) != -1
    })
   
  }
   //form input
   newUser = {
     id: 0,
    name : '',
    age : 0,
    phone : '',
    email : '',
    img : ''
  }
  onChangeInput($event : any, key : string){
    const inputValue = $event.target.value;
    this.newUser = {
      ...this.newUser,
      [key] : inputValue
    }
  }
  //nhet thang newUser nhap o input vao mang
  onSubmit(){
    //validate truoc khi cap nhat du lieu
    if(!this.onValidate(this.newUser)){
      //neu khong pass qua dieu kien validate thi se
      // return ra khoi hang validate luon
      return;
    }
    if(this.newUser.id){
      for(let i =0; i<this.students.length; i++){
        //kiem  tra phan tu nao co id trung voi id cua du lieu chinh sua
        if(this.students[i].id === this.newUser.id){
          //khi tim thay thi gan gia tri cho phan tu do
          this.students[i] = this.newUser;
        }
      }
    }else{
      this.newUser = {
        ...this.newUser,
        id: this.students.length + 1,
        age: Number(this.newUser.age)
  
      }
      
      console.log(this.newUser)
      this.students.push(this.newUser)
      this.newUser = {
        id: 0,
        name: '',
        age: 0,
        phone: '',
        email: '',
        img: ''
      }
    }
    
  }
  onValidate(obj : any){
    if(!obj.name || !obj.age || !obj.email || !obj.img || !obj.phone){
      return false;
    }
    return true;
    // = if(obj.name !== '')
  }
  onEdit(student :any){
    this.newUser = student  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
