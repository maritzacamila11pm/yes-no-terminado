<?php
$metodo = $_SERVER['REQUEST_METHOD'];
$respuesta =[];

switch ($metodo) {
    case 'GET':
        $respuesta = [
        'mensaje' => 'Metodo GET correcto ',
        'data'=> $_GET
    ];
        break;
    case 'POST':
        $data_entrante = json_decode(file_get_contents("php://input"), true);
        
        $respuesta = [
            'mensaje' => 'Metodo POST correcto',
            'data'=> $data_entrante
        ];
        break;
    case 'PUT':
        $data_entrante2 = json_decode(file_get_contents("php://input"), true);
        
        $respuesta = [
            'mensaje' => 'Metodo PUT correcto ', 
            'data' => $data_entrante2];
            break;
    case 'DELETE':
         $respuesta = [
        'mensaje' => 'Metodo DELETE correcto', 
        'data' => $_GET];
        break;
   
        
        default:
        # code...
        break;
}

echo json_encode($respuesta);