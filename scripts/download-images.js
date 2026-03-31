#!/usr/bin/env node
/**
 * Descarga todas las imágenes de Unsplash al directorio /public/images/
 * Ejecutar desde la raíz del proyecto: node scripts/download-images.js
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "../public/images");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const images = [
  // Hero & secciones principales
  ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", "hero-bg.jpg"],
  ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85", "grupo-hero.jpg"],
  ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85", "proyecto-hero.jpg"],
  ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85", "importaciones-hero.jpg"],
  ["https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=1920&q=85", "proyectos-hero.jpg"],
  // Unidades de negocio
  ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=85", "unit-construcciones.jpg"],
  ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=85", "unit-importador.jpg"],
  ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85", "unit-desarrollos.jpg"],
  ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=85", "unit-digital.jpg"],
  // Proyectos
  ["https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=900&q=85", "project-1.jpg"],
  ["https://images.unsplash.com/photo-1590417974735-f5e02f1e3d65?w=900&q=85", "project-2.jpg"],
  ["https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=85", "project-3.jpg"],
  ["https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85", "project-4.jpg"],
  ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85", "project-5.jpg"],
  ["https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=900&q=85", "project-6.jpg"],
  ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85", "project-7.jpg"],
  ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85", "project-8.jpg"],
  // Categorías de importación
  ["https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=700&q=80", "cat-estructuras.jpg"],
  ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80", "cat-chapas.jpg"],
  ["https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=700&q=80", "cat-maquinaria.jpg"],
  ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80", "cat-hormigon.jpg"],
  ["https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80", "cat-logistica.jpg"],
  ["https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80", "cat-solar.jpg"],
  ["https://images.unsplash.com/photo-1581092160562-40aa08e12f38?w=700&q=80", "cat-seguridad.jpg"],
  ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&q=80", "cat-equipamiento.jpg"],
  // Páginas adicionales
  ["https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85", "about-team.jpg"],
  ["https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=85", "recursos-bg.jpg"],
  ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85", "contacto-bg.jpg"],
  ["https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=85", "soluciones-1.jpg"],
  ["https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=85", "soluciones-2.jpg"],
];

function download(url, filename, retries = 3) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(OUTPUT_DIR, filename);
    const file = fs.createWriteStream(filepath);

    const req = https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(filepath);
        download(res.headers.location, filename, retries).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Status ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        const size = fs.statSync(filepath).size;
        console.log(`✓ ${filename} (${(size / 1024).toFixed(0)}kb)`);
        resolve();
      });
    });

    req.on("error", (err) => {
      file.close();
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      if (retries > 0) {
        setTimeout(() => download(url, filename, retries - 1).then(resolve).catch(reject), 1000);
      } else {
        reject(err);
      }
    });

    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout: ${filename}`));
    });
  });
}

async function main() {
  console.log(`Descargando ${images.length} imágenes en ${OUTPUT_DIR}\n`);
  let ok = 0, fail = 0;
  for (const [url, filename] of images) {
    try {
      await download(url, filename);
      ok++;
    } catch (e) {
      console.error(`✗ ${filename}: ${e.message}`);
      fail++;
    }
  }
  console.log(`\nFinalizado: ${ok} OK, ${fail} errores`);
}

main();
