import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { RegistroParticipanteComponent } from './registro-participante/registro-participante.component';
import { RegistroTutorComponent } from './registro-tutor/registro-tutor.component';
import { TUTOR_DASHBOARD_ROUTES } from './tutor-dashboard/tutor-dashboard-routing';
import { AuthGuard } from './guards/auth.guard';
import { PARTICIPANTE_DASHBOARD_ROUTES } from './participante-dashboard/participante-dashboard-routing';


const appRoutes = [
  { path: 'tutor', children: TUTOR_DASHBOARD_ROUTES }, // Carga las rutas del dashboard del tutor
  { path: '', redirectTo: 'tutor/perfil', pathMatch: 'full' }, // Redirección por defecto


];

export const routes: Routes = [

  //{ path: 'tutor/perfil', loadComponent: () => import('./tutor-dashboard/tutor-profile/tutor-profile.component').then(m => m.TutorProfileComponent), canActivate: [AuthGuard] },
  { path: 'registro-participante', component: RegistroParticipanteComponent, pathMatch: 'full' },
  { path: 'registro-tutor', component: RegistroTutorComponent, pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },

  // 🔹 Aquí cargamos TODO el dashboard del tutor (con sidebar y sus subrutas)
  {
    path: 'tutor',
    canActivate: [AuthGuard],
    children: TUTOR_DASHBOARD_ROUTES
  },

  {
    path: 'participante',
    canActivate: [AuthGuard],
    children: PARTICIPANTE_DASHBOARD_ROUTES
  },

];

