package com.generation.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/mandardatos")
public class MandarDatos {

	@GetMapping("/saludo")
	public String saludo() {
		return "Te vuelvo a saludar";
	}
	
	//Pedir datos
	@GetMapping("/mandarsaludos")
	public String mardarS(  @RequestParam(value = "nombre", defaultValue="C12") String nom,
			  				@RequestParam(value = "apellido", defaultValue="Mexico")String apel) {
		return "Le mando saludos a " + nom + " " + apel;
	}
	
	
	
	
}
