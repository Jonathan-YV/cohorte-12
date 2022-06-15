package com.generation.demo.service;

import java.util.List;
import java.util.Map;

import com.generation.demo.model.Cohorte;

public interface CohorteService {
	
	// Tiene metodos vacios
	// Las clases que lo implementen deben cumplir con los metodos vacios declarados
	
	// Leer
	Cohorte getCohorte(Integer id); //leer una sola cohorte con el id indicado
	List<Cohorte> conseguirCohortes(); // leer todas las cohortes
	
	List<Cohorte> getCohortesByCiudad(String ciudad);
	
	List<Map<String, Object>> getInstructorAlumno();
	
	// Escribir
	Cohorte saveCohorte(Cohorte cohorte); // guardar la cohorte enviada
	
	// Actualizar
	
	
	// Borrar
	
	
}
