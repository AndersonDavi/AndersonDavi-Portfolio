import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class ThreeService implements OnDestroy {
  private canvas: HTMLCanvasElement | undefined;
  private renderer: THREE.WebGLRenderer | undefined;
  private camera: THREE.PerspectiveCamera | undefined;
  private scene: THREE.Scene | undefined;
  private light: THREE.AmbientLight | undefined;
  private cube: THREE.Mesh | undefined;
  private frameId: number | undefined;
  private particles: THREE.Mesh[] = [];
  private w: number = window.innerWidth;
  private h: number = window.innerHeight;
  constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;
    //escena
    this.scene = new THREE.Scene();
    //camara
    this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 1, 1000);
    this.camera.position.z = 10;
    this.scene.add(this.camera);
    //renderizador
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(this.w, this.h);
    this.renderer.render(this.scene, this.camera);
    //luz
    (this.light = new THREE.AmbientLight('#fff')), 1;
    this.light.position.set(-1, 3, 1);
    this.light.rotateX(60);
    this.scene.add(this.light);

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = '';
    loader.load('./assets/humo.png', (texture) => {
      const geo = new THREE.PlaneGeometry(300, 300);
      const material = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: 0.025,
      });
      const NUM_OF_PARTICLES = 300;
      for (let i = 0; i < NUM_OF_PARTICLES; i++) {
        const particle = new THREE.Mesh(geo, material);
        particle.position.set(
          Math.random() * 500 - 500 / 2,
          Math.random() * 500 - 500 / 2,
          Math.random() * 1000 - 100
        );
        particle.rotation.z = Math.random() * 360;
        this.scene?.add(particle);
        this.particles.push(particle);
      }
    });
  }

  public animate() {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }
    });
  }

  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    this.particles.forEach((particle) => {
      particle.rotation.z += 0.0015;
    });
    this.resize();
    this.renderer!.render(this.scene!, this.camera!);
  }

  resize() {
    this.h = window.innerHeight;
    this.w = window.innerWidth;
    this.camera!.aspect = this.w / this.h;
    this.camera!.updateProjectionMatrix();
    this.renderer!.setSize(this.w, this.h);
  }
}
