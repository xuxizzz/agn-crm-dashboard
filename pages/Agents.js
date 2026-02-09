import { ContentHeader } from "../components/global/ContentHeader.js";
import { QuickActions } from "../components/global/QuickActions.js";    

export function Agents() {
    return `
    <section class="page">
        ${ContentHeader("Agents", "Manage your sales agents and their performance")}
        ${QuickActions()}
    </section>
    `;
}