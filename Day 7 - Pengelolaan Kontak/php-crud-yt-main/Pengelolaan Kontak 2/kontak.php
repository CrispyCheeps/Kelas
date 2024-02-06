<?php
class Kontak{
    public $kontak_id;
    public $nama;
    public $email;
    public $no_telp;

    public function __construct($nama,$email,$no_telp){
        $this->nama = $nama;
        $this->email = $email;
        $this->no_telp = $no_telp;
    }

    public function get_kontak_id(){
        return $this->kontak_id;
    }
    public function get_nama(){
        return $this->nama;
    }
    public function get_email(){
        return $this->email;
    }
    public function get_no_telp(){
        return $this->no_telp;
    }
    public function set_nama($nama){
        $this->nama = $nama;
    }
    public function set_email($email){
        $this->email = $email;
    }
    public function set_no_telp($no_telp){
        $this->no_telp = $no_telp;
    }
    public function set_kontak_id($kontak_id){
        $this->kontak_id = $kontak_id;
    }
    public function updateData($kontak, $id){
        require 'db_conn.php';
        $sql = "UPDATE kontak SET `nama`='$kontak->nama',`email`='$kontak->email',`no_telp`='$kontak->no_telp' WHERE kontak_id = $id";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            $this->set_nama($nama);
            $this->set_email($email);
            $this->set_no_telp($no_telp);
            return true;
        } else {
            return false;
        }
      
    }

    public function addKontak($kontak){
        require 'db_conn.php';
        $sql = "INSERT INTO kontak (`kontak_id`, `nama`, `email`, `no_telp`) VALUES (NULL,'$kontak->nama','$kontak->email','$kontak->no_telp')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            $this->set_nama($nama);
            $this->set_email($email);
            $this->set_no_telp($no_telp);
            return true;
        } else {
            return false;
        }
    }

}

?>