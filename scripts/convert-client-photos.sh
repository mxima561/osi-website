#!/usr/bin/env bash
# Convert client-supplied PNGs into web-optimized JPGs in public/photos/.
# Idempotent: re-running re-converts from source. Requires macOS `sips`.
set -euo pipefail

SRC="${1:-$HOME/Desktop/Final Website Photos (edited)}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/photos"
mkdir -p "$OUT"

# rows: <max-px> <TAB> <relative source path> <TAB> <target filename>
convert() {
  local size="$1" src="$SRC/$2" dst="$OUT/$3"
  if [[ ! -f "$src" ]]; then echo "MISSING: $src" >&2; return 1; fi
  sips -s format jpeg -s formatOptions 82 -Z "$size" "$src" --out "$dst" >/dev/null
  echo "  $3"
}

echo "Converting from: $SRC"

# --- Home ---
convert 1800 "1) Home Page/1) Home Page Main Hero Photo.png" "home-hero.jpg"
convert 1400 "1) Home Page/Who We Work With/Dealers & PMs.png" "audience-dealer.jpg"
convert 1400 "1) Home Page/Who We Work With/Enterprise Clients & Facility Teams.png" "audience-enterprise.jpg"
convert 1100 "1) Home Page/Why OSI (tiles)/Dock to Done.png" "why-dock-to-done.jpg"
convert 1100 "1) Home Page/Why OSI (tiles)/Real Infrastructure.png" "why-real-infrastructure.jpg"
convert 1100 "1) Home Page/Why OSI (tiles)/Total Project Support.png" "why-total-support.jpg"
convert 1100 "1) Home Page/Why OSI (tiles)/Dealer & Facility Team Fluency.png" "why-dealer-fluency.jpg"
convert 1100 "1) Home Page/Services (tiles)/Commercial Furniture Installation.png" "service-tile-installation.jpg"
convert 1100 "1) Home Page/Services (tiles)/Modular Walls.png" "service-tile-modular-walls.jpg"
convert 1100 "1) Home Page/Services (tiles)/Asset Management & Storage.png" "service-tile-asset-management-storage.jpg"
convert 1100 "1) Home Page/Services (tiles)/Warehousing & Receiving.png" "service-tile-warehousing.jpg"
convert 1100 "1) Home Page/Services (tiles)/MAC & Daily Services.png" "service-tile-mac-day2.jpg"
convert 1100 "1) Home Page/Services (tiles)/Decommissioning & Relocation.png" "service-tile-decommissioning.jpg"

# --- Services landing ---
convert 1600 "2) Services/All Services Page/What We Offer.png" "services-what-we-offer.jpg"
convert 1400 "2) Services/All Services Page/Built for two core client groups/Dealers & PMs.png" "services-group-dealers.jpg"
convert 1400 "2) Services/All Services Page/Built for two core client groups/Enterprise Clients & Facility Teams.png" "services-group-enterprise.jpg"
convert 1100 "2) Services/All Services Page/Why OSI (tiles)/Organized before install day.png" "services-why-organized.jpg"
convert 1100 "2) Services/All Services Page/Why OSI (tiles)/One accountable partner.png" "services-why-accountable.jpg"
convert 1100 "2) Services/All Services Page/Why OSI (tiles)/Built for complex work.png" "services-why-complex.jpg"
convert 1100 "2) Services/All Services Page/Why OSI (tiles)/Support after the install.png" "services-why-support.jpg"

# --- Service detail pages ---
convert 1400 "2) Services/Commercial Furniture Installation/Services Overview.png" "svc-installation-overview.jpg"
convert 1400 "2) Services/Commercial Furniture Installation/Why OSI.png" "svc-installation-why.jpg"
convert 1400 "2) Services/Commercial Furniture Installation/What We Install.png" "svc-installation-extra.jpg"
convert 1400 "2) Services/Warehousing & Receiving/Services Overview.png" "svc-warehousing-overview.jpg"
convert 1400 "2) Services/Warehousing & Receiving/Why OSI.png" "svc-warehousing-why.jpg"
convert 1400 "2) Services/Warehousing & Receiving/Why it Matters.png" "svc-warehousing-extra.jpg"
convert 1400 "2) Services/Asset Management & Storage/Services Overview.png" "svc-asset-management-storage-overview.jpg"
convert 1400 "2) Services/Asset Management & Storage/Why OSI.png" "svc-asset-management-storage-why.jpg"
convert 1400 "2) Services/Asset Management & Storage/Why it Matters.png" "svc-asset-management-storage-extra.jpg"
convert 1400 "2) Services/MAC & Day 2 Services/Services Overview.png" "svc-mac-day2-overview.jpg"
convert 1400 "2) Services/MAC & Day 2 Services/Why OSI.png" "svc-mac-day2-why.jpg"
convert 1400 "2) Services/MAC & Day 2 Services/Who This is For.png" "svc-mac-day2-extra.jpg"
convert 1400 "2) Services/Modular Walls/Services Overview.png" "svc-modular-walls-overview.jpg"
convert 1400 "2) Services/Modular Walls/Why OSI.png" "svc-modular-walls-why.jpg"
convert 1400 "2) Services/Decommissioning & Relocation/Services Overview.png" "svc-decommissioning-overview.jpg"
convert 1400 "2) Services/Decommissioning & Relocation/Why OSI.png" "svc-decommissioning-why.jpg"

# --- Industries landing ---
convert 1600 "3) Industries/All Industries Page/Our Approach.png" "industries-our-approach.jpg"
convert 1100 "3) Industries/All Industries Page/Environments (tiles)/Hospitality.png" "ind-tile-hospitality.jpg"
convert 1100 "3) Industries/All Industries Page/Environments (tiles)/Healthcare.png" "ind-tile-healthcare.jpg"
convert 1100 "3) Industries/All Industries Page/Environments (tiles)/Corporate Office.png" "ind-tile-corporate-office.jpg"
convert 1100 "3) Industries/All Industries Page/Environments (tiles)/Education.png" "ind-tile-education.jpg"
convert 1100 "3) Industries/All Industries Page/Environments (tiles)/Government.png" "ind-tile-government.jpg"
convert 1100 "3) Industries/All Industries Page/Why OSI (tiles)/Built for every environment.png" "industries-why-every-env.jpg"
convert 1100 "3) Industries/All Industries Page/Why OSI (tiles)/Beyond standard office installs.png" "industries-why-beyond.jpg"
convert 1100 "3) Industries/All Industries Page/Why OSI (tiles)/Dependable execution in active spaces.png" "industries-why-dependable.jpg"
convert 1100 "3) Industries/All Industries Page/Why OSI (tiles)/Infrastructure to control the process.png" "industries-why-infrastructure.jpg"

# --- Industry detail pages ---
convert 1400 "3) Industries/Corporate Office/Environment Overview.png" "ind-corporate-office-overview.jpg"
convert 1400 "3) Industries/Corporate Office/Why OSI.png" "ind-corporate-office-why.jpg"
convert 1400 "3) Industries/Healthcare/Environments Overview.png" "ind-healthcare-overview.jpg"
convert 1400 "3) Industries/Healthcare/Why OSI.png" "ind-healthcare-why.jpg"
convert 1400 "3) Industries/Education/Environment Overview.png" "ind-education-overview.jpg"
convert 1400 "3) Industries/Education/Why OSI.png" "ind-education-why.jpg"
convert 1400 "3) Industries/Hospitality/Environment Overview.png" "ind-hospitality-overview.jpg"
convert 1400 "3) Industries/Hospitality/Why OSI.png" "ind-hospitality-why.jpg"
convert 1400 "3) Industries/Government/Environment Overview.png" "ind-government-overview.jpg"
convert 1400 "3) Industries/Government/Why OSI.png" "ind-government-why.jpg"

# --- About ---
convert 1600 "5) About/Our Approach.png" "about-our-approach.jpg"
convert 1600 "5) About/What Makes OSI Different.png" "about-different.jpg"
convert 1800 "5) About/OSI Building.png" "osi-building.jpg"
convert 1100 "5) About/Operations (tiles)/Commercial Furniture Installation.png" "about-ops-installation.jpg"
convert 1100 "5) About/Operations (tiles)/Modular Walls.png" "about-ops-modular-walls.jpg"
convert 1100 "5) About/Operations (tiles)/Asset Management & Storage.png" "about-ops-asset-management-storage.jpg"
convert 1100 "5) About/Operations (tiles)/Warehousing & Receiving.png" "about-ops-warehousing.jpg"
convert 1100 "5) About/Operations (tiles)/MAC & Daily Services.png" "about-ops-mac-day2.jpg"
convert 1100 "5) About/Operations (tiles)/Decommissioning & Relocation.png" "about-ops-decommissioning.jpg"

# --- Projects ---
convert 1400 "4) Projects/Corporate Campus Installation.png" "project-corporate-campus.jpg"
convert 1400 "4) Projects/Custom Furniture Installation.png" "project-custom-furniture.jpg"
convert 1400 "4) Projects/Training Center Buildout.png" "project-training-center.jpg"
convert 1400 "4) Projects/Dedicated Asset Management.png" "project-asset-management.jpg"
convert 1400 "4) Projects/Sportsbook Installation.png" "project-sportsbook.jpg"
convert 1400 "4) Projects/Quad Privacy Booth.png" "project-quad-booth.jpg"
convert 1400 "4) Projects/Wire-Frame Pod & Lounge.png" "project-wireframe-pod.jpg"
convert 1400 "4) Projects/Cafe & Lounge Installation.png" "project-cafe-lounge.jpg"
convert 1400 "4) Projects/Downtown Tower Restack.png" "project-downtown-tower.jpg"

echo "Done."
