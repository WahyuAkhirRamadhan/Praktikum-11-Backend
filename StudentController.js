// TODO 1: Buat data students
// code here
let student = ["Wahyu", "Ramadhan","Akbar"];
// TODO 2: export data students
// code here
module.export = student;
// TODO 3: Import data students dari folder data/students.js
// code here
let student = require("../data/students");
// Membuat Class StudentController
class StudentController {
    index(req, res) {
      // TODO 4: Tampilkan data students
      // code here
      const data = {
        message: "Menampilkkan semua students",
        data:student,
      };
  
      res.json(data);
    }
  
    store(req, res) {
      const { nama } = req.body;
       // TODO 5: Tambahkan data students
      // code here
      student.push(nama);
      const data = {
        message: `Menambahkan data student: ${nama}`,
        data: student,
      };
  
      res.json(data);
    }
  
    update(req, res) {
      const { id } = req.params;
      const { nama } = req.body;
  // TODO 6: Update data students
      // code here
      student[id] = nama;
      const data = {
        message: `Mengedit student id ${id}, nama ${nama}`,
        data: student,
      };
  
      res.json(data);
    }
  
    destroy(req, res) {
      const { id } = req.params;
  
      // TODO 7: Hapus data students
      // code here
      student.splice(1,id);
      const data = {
        message: `Menghapus student id ${id}`,
        data: student,
    };
  
    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
