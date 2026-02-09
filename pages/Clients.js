import { ContentHeader } from "../components/global/ContentHeader.js";
import { QuickActions } from "../components/global/QuickActions.js";    

export function Clients() {
    return `
    <section class="page">
        ${ContentHeader("Clients", "Manage your clients and their information")}
        ${QuickActions()}
    </section>
    `;
}