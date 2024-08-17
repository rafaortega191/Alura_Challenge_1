# Alura_Challenge_1
Desafio numero 1 de Alura, encriptado y desencriptado de texto.

# Página de Encriptación y Desencriptación de Texto

## Descripción

Esta aplicación web permite encriptar y desencriptar textos utilizando un sistema de encriptación personalizado. La encriptación sigue un conjunto de reglas específicas que transforman las vocales en combinaciones de caracteres, lo que ofrece un nivel básico de seguridad y ofuscación. Esta herramienta es útil para mantener la confidencialidad de mensajes simples.

## Características

- **Encriptación de Texto**: Transforma un texto plano en una versión encriptada siguiendo las reglas predefinidas.
- **Desencriptación de Texto**: Convierte el texto encriptado de vuelta a su forma original.
- **Interfaz Dinámica**: Al encriptar texto, se oculta una imagen en la página, y se puede copiar el texto encriptado directamente.
- **Soporte para Mensajes Largos**: El contenedor que muestra el mensaje encriptado se ajusta automáticamente para evitar el desbordamiento de contenido.

## Reglas de Encriptación

La encriptación se basa en las siguientes transformaciones de vocales:

- `e` -> `enter`
- `i` -> `imes`
- `a` -> `ai`
- `o` -> `ober`
- `u` -> `ufat`

**Ejemplo:**

- Texto original: `hola`
- Texto encriptado: `hoberlai`

## Requisitos

- El texto de entrada debe contener solo letras minúsculas.
- No se permiten acentos ni caracteres especiales.

## Instalación

Este proyecto está desarrollado con HTML, CSS y JavaScript, por lo que no requiere instalación. Simplemente clona el repositorio y abre el archivo `index.html` en tu navegador.

git clone https://github.com/rafaortega191/Alura_Challenge_1.git
cd Alura_Challenge_1
