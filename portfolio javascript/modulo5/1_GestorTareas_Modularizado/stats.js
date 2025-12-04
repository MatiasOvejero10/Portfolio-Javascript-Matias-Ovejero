// stats.js — módulo cargado dinámicamente

import { loadTasks } from "./tasks.js";

export function generateStats() {
    const tasks = loadTasks();

    const total = tasks.length;
    const completadas = tasks.filter(t => t.done).length;
    const pendientes = total - completadas;

    return {
        total,
        completadas,
        pendientes
    };
}

export function showStatsModal() {
    const stats = generateStats();

    alert(
        `📊 ESTADÍSTICAS\n\n` +
        `Total tareas: ${stats.total}\n` +
        `Completadas: ${stats.completadas}\n` +
        `Pendientes: ${stats.pendientes}`
    );
}
