# 🧮 Sumar los elementos de un arreglo con ciclos en JavaScript

## 🙌 Contexto

En esta actividad, trabajarás con un **arreglo de números enteros** y deberás **sumar todos sus elementos** utilizando **tres enfoques distintos**:

- Un ciclo `for`
- El método `forEach`
- El método `map`

El objetivo es que comprendas las **diferencias entre los ciclos tradicionales y los métodos de los arreglos en JavaScript**, y cómo pueden usarse para resolver un mismo problema.

---

## ✍️ Consigna

Debes realizar lo siguiente:

1. Sumar los elementos de un arreglo utilizando un **ciclo `for`**.
2. Sumar los elementos del mismo arreglo utilizando el método **`forEach`**.
3. Sumar los elementos del arreglo utilizando el método **`map`**.

---

## 🕛 Tiempo estimado

⏱️ **25 minutos**

---

## ⚙️ Paso a paso

1. Define un arreglo con **5 o 6 números enteros**.  
   Ejemplo:

   ```js
   const numeros = [10, 20, 30, 40, 50];
   ```

2. Inicializa una variable `suma` en **0**.

   ```js
   let suma = 0;
   ```

3. Usa un **ciclo `for`** para recorrer el arreglo y acumular la suma.

4. Imprime el resultado en consola.

5. Repite el proceso usando:
   - `forEach`
   - `map`

---

## 💡 Pistas

- El ciclo `for` es ideal cuando necesitas un mayor control del índice.
- `forEach` es más legible y se usa comúnmente para recorrer arreglos.
- `map` **no está pensado para sumar**, sino para transformar arreglos, pero puede usarse con fines educativos.

---

## ✅ Resultado esperado

Al finalizar, deberías ver en consola el mismo resultado para los tres métodos:

```txt
La suma total es: 150
```

---

## 🚀 Extra (opcional)

- Intenta resolver el ejercicio usando el método `reduce`.
- Prueba con diferentes valores en el arreglo.
- Muestra los resultados con mensajes descriptivos en consola.

¡Éxito! 💪🔥
