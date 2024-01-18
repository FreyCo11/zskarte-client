import { Sign } from '../core/entity/sign';

export class Signs {
  public static SIGNS: Sign[] = [
    {
      id: 1,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/ABC Dekontaminationsstelle.svg',
      de: 'ABC Dekontaminationsstelle',
      en: 'ABC Dekontaminationsstelle',
      fr: 'Place de décontamination',
    },
    {
      id: 2,
      kat: 'action',
      type: 'Polygon',
      color: '#0000FF',
      src: 'BABS/Absperrung Einsatzraum.svg',
      de: 'Absperrung Einsatzraum',
      en: 'Absperrung Einsatzraum',
      fr: 'Barrage du secteur d’engagement',
    },
    {
      id: 3,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Absperrung Verkehrswege.svg',
      de: 'Absperrung Verkehrswege',
      en: 'Absperrung Verkehrswege',
      fr: 'Fermeture de la route',
    },
    {
      id: 4,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Achse fuer Ei, Rttg, Vsg.svg',
      de: 'Achse für Ei, Rttg, Vsg',
      en: 'Achse für Ei, Rttg, Vsg',
      fr: 'Axe d’engagement pour le sauvetage, l’approvisionnement, etc.',
      style: 'dash',
    },
    {
      id: 5,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Angehoerigensammelstelle.svg',
      de: 'Angehörigensammelstelle',
      en: 'Angehörigensammelstelle',
      fr: 'Poste collecteur pour les proches',
    },
    {
      id: 6,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Atomunfall.svg',
      de: 'Atomunfall',
      en: 'Atomunfall',
      fr: 'Accident nucléaire',
    },
    {
      id: 7,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Autounfall.svg',
      de: 'Autounfall',
      en: 'Autounfall',
      fr: 'Accident de circulation automobile',
    },
    {
      id: 8,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Beabsichtigte Erkundung.svg',
      de: 'Beabsichtigte Erkundung',
      en: 'Beabsichtigte Erkundung',
      fr: 'Exploration / Reconnaissances prévues',
      arrow: 'filled',
    },
    {
      id: 9,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Beabsichtigter Einsatz.svg',
      de: 'Beabsichtigter Einsatz',
      en: 'Beabsichtigter Einsatz',
      fr: 'Engagements prévus',
      style: 'dash',
      arrow: 'filled',
    },
    {
      id: 10,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Beabsichtigte Verschiebung.svg',
      de: 'Beabsichtigte Verschiebung',
      en: 'Beabsichtigte Verschiebung',
      fr: 'Mouvements prévus',
      style: 'dash',
      hideIcon: true,
      arrow: 'filled',
      strokeWidth: 1.5,
    },
    {
      id: 11,
      kat: 'action',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Beobachtung.svg',
      de: 'Beobachtung',
      en: 'Beobachtung',
      fr: 'Observation',
    },
    {
      id: 12,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Beschaedigung.svg',
      de: 'Beschädigung',
      en: 'Beschädigung',
      fr: 'Dégât',
    },
    {
      id: 13,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Betreuungsstelle.svg',
      de: 'Betreuungsstelle',
      en: 'Betreuungsstelle',
      fr: 'Poste d’assistance',
    },
    {
      id: 14,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Betriebsstoffabgabestelle.svg',
      de: 'Betriebsstoffabgabestelle',
      en: 'Betriebsstoffabgabestelle',
      fr: 'Station de carburant',
    },
    {
      id: 15,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Bezirksfuehrungsorgan.svg',
      de: 'Bezirksführungsorgan',
      en: 'Bezirksführungsorgan',
      fr: 'Organe de conduite de district',
    },
    {
      id: 16,
      kat: 'effect',
      type: 'Polygon',
      color: '#948B68',
      src: 'BABS/Biologisch verseuchtes Gebiet.svg',
      de: 'Biologisch verseuchtes Gebiet',
      en: 'Biologisch verseuchtes Gebiet',
      fr: 'Zone biologiquement contaminée',
    },
    {
      id: 17,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Biounfall.svg',
      de: 'Biounfall',
      en: 'Biounfall',
      fr: 'Accident biologique',
    },
    {
      id: 18,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/B Laboratorium.svg',
      de: 'B Laboratorium',
      en: 'B Laboratorium',
      fr: 'Laboratoire B',
    },
    {
      id: 19,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Bombenanschlag.svg',
      de: 'Bombenanschlag',
      en: 'Bombenanschlag',
      fr: 'Attentat à la bombe',
    },
    {
      id: 20,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Bombendrohung.svg',
      de: 'Bombendrohung',
      en: 'Bombendrohung',
      fr: 'Menace à la bombe',
    },
    {
      id: 21,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Brandanschlag.svg',
      de: 'Brandanschlag',
      en: 'Brandanschlag',
      fr: 'Incendie criminel',
    },
    {
      id: 22,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Brand einzelnes Gebaeude Flamme.svg',
      de: 'Brand einzelnes Gebäude Flamme',
      en: 'Brand einzelnes Gebäude Flamme',
      fr: 'Incendie isolé',
    },
    {
      id: 23,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Brand.svg',
      de: 'Brand',
      en: 'Brand',
      fr: 'Incendie',
    },
    {
      id: 26,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Brandzone Flaechenbrand.svg',
      de: 'Brandzone Flächenbrand',
      en: 'Brandzone Flächenbrand',
      fr: 'Zone en feu',
      hideIcon: true,
      fillStyle: {
        name: 'hatch',
        size: 1,
        spacing: 8,
      },
      fillOpacity: 1,
    },
    {
      id: 27,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Chemieunfall.svg',
      de: 'Chemieunfall',
      en: 'Chemieunfall',
      fr: 'Accident chimique',
    },
    {
      id: 28,
      kat: 'effect',
      type: 'Polygon',
      color: '#948B68',
      src: 'BABS/Chemievergiftetes Gebiet gasfoermig - fluechtig.svg',
      de: 'Chemievergiftetes Gebiet gasförmig - flüchtig',
      en: 'Chemievergiftetes Gebiet gasförmig - flüchtig',
      fr: 'Zone chimiquement contaminée gazeux - volatil',
    },
    {
      id: 29,
      kat: 'effect',
      type: 'Polygon',
      color: '#948B68',
      src: 'BABS/Chemievergiftete Zone fluessig - sesshaft.svg',
      de: 'Chemievergiftete Zone flüssig - sesshaft',
      en: 'Chemievergiftete Zone flüssig - sesshaft',
      fr: 'Zone chimiquement contaminée liquide',
    },
    {
      id: 30,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Chemikalien.svg',
      de: 'Chemikalien',
      en: 'Chemikalien',
      fr: 'Chimique',
    },
    {
      id: 31,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Debriefingstelle.svg',
      de: 'Debriefingstelle',
      en: 'Debriefingstelle',
      fr: 'Poste de débriefing',
    },
    {
      id: 32,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Demo gewaltlos.svg',
      de: 'Demo gewaltlos',
      en: 'Demo gewaltlos',
      fr: 'Manifestation',
    },
    {
      id: 33,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Demo gewaltsam.svg',
      de: 'Demo gewaltsam',
      en: 'Demo gewaltsam',
      fr: 'Manifestation avec exactions',
    },
    {
      id: 34,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Drohung.svg',
      de: 'Drohung',
      en: 'Drohung',
      fr: 'Menace',
    },
    {
      id: 35,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Duerre.svg',
      de: 'Dürre',
      en: 'Dürre',
      fr: 'Sécheresse',
    },
    {
      id: 36,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Durchgefuehrte Erkundung.svg',
      de: 'Durchgeführte Erkundung',
      en: 'Durchgeführte Erkundung',
      fr: 'Exploration / Reconnaissances exécutées',
    },
    {
      id: 37,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Durchgefuehrter Einsatz.svg',
      de: 'Durchgeführter Einsatz',
      en: 'Durchgeführter Einsatz',
      fr: 'Engagements exécutés',
    },
    {
      id: 38,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Durchgefuehrte Verschiebung.svg',
      de: 'Durchgeführte Verschiebung',
      en: 'Durchgeführte Verschiebung',
      fr: 'Mouvements exécutés',
    },
    {
      id: 39,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Eingesperrte - Abgeschnittene.svg',
      de: 'Eingesperrte - Abgeschnittene',
      en: 'Eingesperrte - Abgeschnittene',
      fr: 'Personnes enfermées ou retranchées',
    },
    {
      id: 40,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Einsatzleiter.svg',
      de: 'Einsatzleiter',
      en: 'Einsatzleiter',
      fr: 'Chef d’intervention',
    },
    {
      id: 41,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Einsatzleitung.svg',
      de: 'Einsatzleitung',
      en: 'Einsatzleitung',
      fr: 'Direction d’intervention',
    },
    {
      id: 42,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Einsatzzentrale.svg',
      de: 'Einsatzzentrale',
      en: 'Einsatzzentrale',
      fr: 'Centrale d‘engagement',
    },
    {
      id: 43,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Eisenbahnunglueck.svg',
      de: 'Eisenbahnunglück',
      en: 'Eisenbahnunglück',
      fr: 'Accident ferroviaire',
    },
    {
      id: 44,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Elektrizitaet.svg',
      de: 'Elektrizität',
      en: 'Elektrizität',
      fr: 'Electricité',
    },
    {
      id: 45,
      kat: 'incident',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Energieausfall.svg',
      de: 'Energieausfall',
      en: 'Energieausfall',
      fr: 'Panne énergétique',
    },
    {
      id: 46,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Epidemie.svg',
      de: 'Epidemie',
      en: 'Epidemie',
      fr: 'Epidemie',
    },
    {
      id: 47,
      kat: 'incident',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Erdbeben.svg',
      de: 'Erdbeben',
      en: 'Erdbeben',
      fr: 'Tremblement de terre',
    },
    {
      id: 48,
      kat: 'incident',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Erdrutsch.svg',
      de: 'Erdrutsch',
      en: 'Erdrutsch',
      fr: 'Glissement de terrain',
    },
    {
      id: 49,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Explosion.svg',
      de: 'Explosion',
      en: 'Explosion',
      fr: 'Explosion',
    },
    {
      id: 52,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Fluechtlinge.svg',
      de: 'Flüchtlinge',
      en: 'Flüchtlinge',
      fr: 'Réfugiés',
    },
    {
      id: 53,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Flugzeugabsturz.svg',
      de: 'Flugzeugabsturz',
      en: 'Flugzeugabsturz',
      fr: 'Catastrophe aérienne',
    },
    {
      id: 54,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Gas.svg',
      de: 'Gas',
      en: 'Gas',
      fr: 'Gaz',
    },
    {
      id: 55,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Gebaeudeeinsturz.svg',
      de: 'Gebäudeeinsturz',
      en: 'Gebäudeeinsturz',
      fr: 'Immeuble effondré',
    },
    {
      id: 56,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Gefahr durch Loeschen mit Wasser.svg',
      de: 'Gefahr durch Löschen mit Wasser',
      en: 'Gefahr durch Löschen mit Wasser',
      fr: "Danger en cas d'extinction avec de l'eau",
    },
    {
      id: 57,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Gefahrentafel mit UN-Nummer.svg',
      de: 'Gefahrentafel mit UN-Nummer',
      en: 'Gefahrentafel mit UN-Nummer',
      fr: 'Plaque de danger avec numéro ONU',
    },
    {
      id: 58,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Gefahr fuer Grundwasser.svg',
      de: 'Gefahr für Grundwasser',
      en: 'Gefahr für Grundwasser',
      fr: 'Danger pour les eaux de surface et/ou nappes souterraines',
    },
    {
      id: 59,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Gemeindefuehrungsorgan.svg',
      de: 'Gemeindeführungsorgan',
      en: 'Gemeindeführungsorgan',
      fr: 'Organe de conduite communal',
    },
    {
      id: 60,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Gruppenfuehrer.svg',
      de: 'Gruppenführer',
      en: 'Gruppenführer',
      fr: 'Chef de groupe',
    },
    {
      id: 61,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Gruppe.svg',
      de: 'Gruppe',
      en: 'Gruppe',
      fr: 'Groupe',
    },
    {
      id: 62,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Helikopterlandeplatz.svg',
      de: 'Helikopterlandeplatz',
      en: 'Helikopterlandeplatz',
      fr: 'Place d’atterrissage pour hélicoptère',
    },
    {
      id: 63,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Informationsstelle.svg',
      de: 'Informationsstelle',
      en: 'Informationsstelle',
      fr: 'Point d’information',
    },
    {
      id: 64,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Informationszentrum.svg',
      de: 'Informationszentrum',
      en: 'Informationszentrum',
      fr: 'Centre de presse',
    },
    {
      id: 65,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Infrastrukturschaden.svg',
      de: 'Infrastrukturschaden',
      en: 'Infrastrukturschaden',
      fr: 'Dommages aux infrastructures',
    },
    {
      id: 66,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Kadaversammelstelle.svg',
      de: 'Kadaversammelstelle',
      en: 'Kadaversammelstelle',
      fr: 'Poste collecteur de cadavres d’animaux',
    },
    {
      id: 67,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Kanalisationsausfall.svg',
      de: 'Kanalisationsausfall',
      en: 'Kanalisationsausfall',
      fr: 'Egoûts défectueux',
    },
    {
      id: 68,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Kantonales Fuehrungsorgan.svg',
      de: 'Kantonales Führungsorgan',
      en: 'Kantonales Führungsorgan',
      fr: 'Organe de conduite cantonal',
    },
    {
      id: 69,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/KGS Sammelpunkt.svg',
      de: 'KGS Sammelpunkt',
      en: 'KGS Sammelpunkt',
      fr: 'Point de collecte PBC',
    },
    {
      id: 70,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/KGS Notdepot.svg',
      de: 'KGS Notdepot',
      en: 'KGS Notdepot',
      fr: 'Dépôt d’urgence PBC',
    },
    {
      id: 71,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/KGS Notlager.svg',
      de: 'KGS Notlager',
      en: 'KGS Notlager',
      fr: 'Entrepôt d’urgence PBC',
    },
    {
      id: 72,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Kommandoposten Front.svg',
      de: 'Kommandoposten Front',
      en: 'Kommandoposten Front',
      fr: 'PC engagement',
    },
    {
      id: 73,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Kommandoposten Rueckwaertiges.svg',
      de: 'Kommandoposten Rückwärtiges',
      en: 'Kommandoposten Rückwärtiges',
      fr: 'PC opérations',
    },
    {
      id: 74,
      kat: 'incident',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Kommunikationsstoerung.svg',
      de: 'Kommunikationsstörung',
      en: 'Kommunikationsstörung',
      fr: 'Perturbation de la communication',
    },
    {
      id: 75,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Kompanie.svg',
      de: 'Kompanie',
      en: 'Kompanie',
      fr: 'Compagnie',
    },
    {
      id: 76,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Kontrollstelle.svg',
      de: 'Kontrollstelle',
      en: 'Kontrollstelle',
      fr: 'Point de contrôle',
    },
    {
      id: 77,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Kontrollzentrum.svg',
      de: 'Kontrollzentrum',
      en: 'Kontrollzentrum',
      fr: 'Centre de contrôle',
    },
    {
      id: 78,
      kat: 'incident',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Lawine.svg',
      de: 'Lawine',
      en: 'Lawine',
      fr: 'Avalanche',
    },
    {
      id: 79,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Massenpanik.svg',
      de: 'Massenpanik',
      en: 'Massenpanik',
      fr: 'Effets de panique',
    },
    {
      id: 80,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Materialdepot.svg',
      de: 'Materialdepot',
      en: 'Materialdepot',
      fr: 'Dépôt de matériel',
    },
    {
      id: 81,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Mobile Einsatzzentrale.svg',
      de: 'Mobile Einsatzzentrale',
      en: 'Mobile Einsatzzentrale',
      fr: 'Centrale d’engagement mobile',
    },
    {
      id: 82,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Obdachlose.svg',
      de: 'Obdachlose',
      en: 'Obdachlose',
      fr: 'Sans-abri',
    },
    {
      id: 83,
      kat: 'incident',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Oelverschmutzung.svg',
      de: 'Ölverschmutzung',
      en: 'Ölverschmutzung',
      fr: 'Pollution aux hydrocarbures',
    },
    {
      id: 84,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Offizier - Zugfuehrer.svg',
      de: 'Offizier - Zugführer',
      en: 'Offizier - Zugführer',
      fr: 'Officier',
    },
    {
      id: 85,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Patientensammelstelle.svg',
      de: 'Patientensammelstelle',
      en: 'Patientensammelstelle',
      fr: 'Poste collecteur de patients',
    },
    {
      id: 86,
      kat: 'action',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Pforte.svg',
      de: 'Pforte',
      en: 'Pforte',
      fr: 'Porte',
    },
    {
      id: 87,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Pluenderung.svg',
      de: 'Plünderung',
      en: 'Plünderung',
      fr: 'Pillage',
    },
    {
      id: 88,
      kat: 'effect',
      type: 'Polygon',
      color: '#948B68',
      src: 'BABS/Radioaktives Gebiet.svg',
      de: 'Radioaktives Gebiet',
      en: 'Radioaktives Gebiet',
      fr: 'Zone radioactive',
    },
    {
      id: 89,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Radioaktive Stoffe.svg',
      de: 'Radioaktive Stoffe',
      en: 'Radioaktive Stoffe',
      fr: 'Substances radioactives',
    },
    {
      id: 90,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Regionales Fuehrungsorgan.svg',
      de: 'Regionales Führungsorgan',
      en: 'Regionales Führungsorgan',
      fr: 'Organe de conduite régional',
    },
    {
      id: 91,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Rutschgebiet.svg',
      de: 'Rutschgebiet',
      en: 'Rutschgebiet',
      fr: 'Glissement de terrain',
    },
    {
      id: 92,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Sabotage.svg',
      de: 'Sabotage',
      en: 'Sabotage',
      fr: 'Sabotage',
    },
    {
      id: 93,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Sammelstelle.svg',
      de: 'Sammelstelle',
      en: 'Sammelstelle',
      fr: 'Poste collecteur',
    },
    {
      id: 94,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Sanitaetshilfsstelle.svg',
      de: 'Sanitätshilfsstelle',
      en: 'Sanitätshilfsstelle',
      fr: 'Poste médical avancé',
    },
    {
      id: 96,
      kat: 'place',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Sperre.svg',
      de: 'Sperre',
      en: 'Sperre',
      fr: 'Barrage',
    },
    {
      id: 97,
      kat: 'action',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Standort mobile Fuehrungsstelle.svg',
      de: 'Standort mobile Führungsstelle',
      en: 'Standort mobile Führungsstelle',
      fr: 'Poste de conduite',
    },
    {
      id: 98,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Starkniederschlag.svg',
      de: 'Starkniederschlag',
      en: 'Starkniederschlag',
      fr: 'Fortes précipitations',
    },
    {
      id: 99,
      kat: 'incident',
      type: 'LineString',
      color: '#FF0000',
      src: 'BABS/Stau.svg',
      de: 'Stau',
      en: 'Stau',
      fr: 'Embouteillage',
    },
    {
      id: 100,
      kat: 'damage',
      type: 'LineString',
      color: '#FF0000',
      src: 'BABS/Str erschwert befahrbar - begehbar.svg',
      de: 'Verkehrsweg erschwert befahrbar - begehbar',
      en: 'Traffic route difficult to drive on - accessible',
      fr: 'Route difficilement praticable pour les vhc, possible pour les piétons',
      style: 'dash',
    },
    {
      id: 101,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Streugutsammelstelle.svg',
      de: 'Streugutsammelstelle',
      en: 'Streugutsammelstelle',
      fr: 'Poste collecteur des objets trouvés',
    },
    {
      id: 102,
      kat: 'damage',
      type: 'LineString',
      color: '#FF0000',
      src: 'BABS/Str nicht befahrbar - schwer begehbar.svg',
      de: 'Verkehrsweg nicht befahrbar - schwer begehbar',
      en: 'Traffic route not passable - difficult to access',
      fr: 'Route impraticable pour les vhc et difficile pour les piétons',
    },
    {
      id: 103,
      kat: 'damage',
      type: 'LineString',
      color: '#FF0000',
      src: 'BABS/Str unpassierbar - gesperrt.svg',
      de: 'Verkehrsweg unpassierbar - gesperrt',
      en: 'Traffic route impassable - closed',
      fr: 'Route impraticable / barrée',
    },
    {
      id: 104,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Stuetzpunkt.svg',
      de: 'Stützpunkt',
      en: 'Stützpunkt',
      fr: 'Point de sécurité',
    },
    {
      id: 105,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Sturm.svg',
      de: 'Sturm',
      en: 'Sturm',
      fr: 'Tempête',
    },
    {
      id: 106,
      kat: 'action',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Tankloeschfahrzeug.svg',
      de: 'Tanklöschfahrzeug',
      en: 'Tanklöschfahrzeug',
      fr: 'Tonne-pompe',
    },
    {
      id: 107,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Teilzerstoerung.svg',
      de: 'Teilzerstörung',
      en: 'Teilzerstörung',
      fr: 'Destruction partielle',
    },
    {
      id: 108,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Terroranschlag.svg',
      de: 'Terroranschlag',
      en: 'Terroranschlag',
      fr: 'Acte de terrorisme',
    },
    {
      id: 109,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Tierseuche.svg',
      de: 'Tierseuche',
      en: 'Tierseuche',
      fr: 'Epizootie',
    },
    {
      id: 110,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Totalzerstoerung.svg',
      de: 'Totalzerstörung',
      en: 'Totalzerstörung',
      fr: 'Destruction totale',
    },
    {
      id: 111,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Totensammelstelle.svg',
      de: 'Totensammelstelle',
      en: 'Totensammelstelle',
      fr: 'Poste collecteur de cadavres',
    },
    {
      id: 112,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Tote.svg',
      de: 'Tote',
      en: 'Tote',
      fr: 'Morts',
    },
    {
      id: 113,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Trinkwasserabgabestelle.svg',
      de: 'Trinkwasserabgabestelle',
      en: 'Trinkwasserabgabestelle',
      fr: 'Poste de distribution d’eau potable',
    },
    {
      id: 114,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Trupp.svg',
      de: 'Trupp',
      en: 'Trupp',
      fr: 'Patrouille',
    },
    {
      id: 115,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Ueberschwemmtes Gebiet.svg',
      de: 'Überschwemmtes Gebiet',
      en: 'Überschwemmtes Gebiet',
      fr: 'Zone inondée ou submergée',
    },
    {
      id: 116,
      kat: 'incident',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Ueberschwemmung.svg',
      de: 'Überschwemmung',
      en: 'Überschwemmung',
      fr: 'Inondation',
    },
    {
      id: 117,
      kat: 'action',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Ueberwachung.svg',
      de: 'Überwachung',
      en: 'Überwachung',
      fr: 'Surveillance',
    },
    {
      id: 118,
      kat: 'action',
      type: 'LineString',
      color: '#0000FF',
      src: 'BABS/Umleitung.svg',
      de: 'Umleitung',
      en: 'Umleitung',
      fr: 'Déviations',
    },
    {
      id: 119,
      kat: 'danger',
      type: 'Point',
      color: '#FF9100',
      src: 'BABS/Unfall.svg',
      de: 'Unfall',
      en: 'Unfall',
      fr: 'Accident',
    },
    {
      id: 120,
      kat: 'action',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Verkehrsposten.svg',
      de: 'Verkehrsposten',
      en: 'Verkehrsposten',
      fr: 'Poste de circulation',
    },
    {
      id: 121,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Verletztennest.svg',
      de: 'Verletztennest',
      en: 'Verletztennest',
      fr: 'Nid de blessés',
    },
    {
      id: 122,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Verletzte.svg',
      de: 'Verletzte',
      en: 'Verletzte',
      fr: 'Patients (blessés)',
    },
    {
      id: 123,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Vermisste.svg',
      de: 'Vermisste',
      en: 'Vermisste',
      fr: 'Disparus',
    },
    {
      id: 124,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Verpflegungsabgabestelle.svg',
      de: 'Verpflegungsabgabestelle',
      en: 'Verpflegungsabgabestelle',
      fr: 'Poste de distribution de subsistance',
    },
    {
      id: 125,
      kat: 'incident',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Wasservsgausfall.svg',
      de: 'Wasserversorgungsausfall',
      en: 'Wasserversorgungsausfall',
      fr: 'Interruption de l’approvisionnement en eau',
    },
    {
      id: 126,
      kat: 'action',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Wasserwerfer.svg',
      de: 'Wasserwerfer',
      en: 'Wasserwerfer',
      fr: 'Canon à eau',
    },
    {
      id: 127,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Zerstoerte Zone einer Ortschaft.svg',
      de: 'Zerstörte Zone einer Ortschaft',
      en: 'Zerstörte Zone einer Ortschaft',
      fr: 'Zone sinistrée, impraticable à l’intérieur d’une localité',
      hideIcon: true,
      fillStyle: {
        name: 'cross',
        size: 1,
        spacing: 8,
      },
      fillOpacity: 1,
    },
    {
      id: 128,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Zug.svg',
      de: 'Zug',
      en: 'Zug',
      fr: 'Section',
    },
    {
      id: 129,
      kat: 'action',
      type: 'Polygon',
      color: '#0000FF',
      src: 'BSM/Absperrung mit Ueberwachung.svg',
      de: 'Absperrung mit Überwachung',
      en: 'Absperrung mit Überwachung',
      fr: 'Barrière avec surveillance ',
    },
    {
      id: 131,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Brand einzelnes Gebaeude - Signatur.svg',
      de: 'Brand einzelnes Gebäude',
      en: 'Brand einzelnes Gebäude',
      fr: 'Incendie bâtiment unique',
    },
    {
      id: 133,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Brand mehrerer Gebaeude - Signatur.svg',
      de: 'Brand mehrerer Gebäude',
      en: 'Brand mehrerer Gebäude',
      fr: 'Incendie dans plusieurs immeubles',
    },
    {
      id: 137,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BSM/Feuerwehr.svg',
      de: 'Feuerwehr',
      en: 'Feuerwehr',
      fr: 'Pompiers',
    },
    {
      id: 138,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BSM/Komm Ausfall Nat.svg',
      de: 'Komm Ausfall Nat - Mobilnetz',
      en: 'Komm Ausfall Nat - Mobilnetz',
      fr: 'Échec de la comm. Nat - Réseau cellulaire',
    },
    {
      id: 139,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BSM/Komm Ausfall Tel.svg',
      de: 'Komm Ausfall Tel - Festnetz',
      en: 'Komm Ausfall Tel - Festnetz',
      fr: 'Échec de la comm. Tel - ligne fixe',
    },
    {
      id: 145,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BSM/Obdachlosensammelstelle.svg',
      de: 'Obdachlosensammelstelle',
      en: 'Obdachlosensammelstelle',
      fr: 'Point de rassemblement sans abri',
    },
    {
      id: 147,
      kat: 'damage',
      type: 'Point',
      color: '#FF0000',
      src: 'BABS/Personenbergungsuebersicht - Leerraster.svg',
      de: 'Personenbergungsübersicht',
      en: 'Personenbergungsübersicht',
      fr: "Vue d'ensemble de sauvetage",
    },
    {
      id: 148,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BSM/Polizei.svg',
      de: 'Polizei',
      en: 'Polizei',
      fr: 'Police',
    },
    {
      id: 149,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Schadengebiet - Schadenraum.svg',
      de: 'Schadengebiet, Schadenraum',
      en: 'Schadengebiet, Schadenraum',
      fr: 'Zone de dégâts',
    },
    {
      id: 151,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'BSM/Spital.svg',
      de: 'Spital',
      en: 'Hôpital',
      fr: 'Spital',
    },
    {
      id: 152,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BSM/Stromausfall.svg',
      de: 'Stromausfall',
      en: 'Stromausfall',
      fr: 'Panne électrique',
    },
    {
      id: 154,
      kat: 'damage',
      type: 'Polygon',
      color: '#FF0000',
      src: 'BABS/Truemmerbereich - Signatur.svg',
      de: 'Trümmerbereich',
      en: 'Trümmerbereich',
      fr: 'Zone de débris',
    },
    {
      id: 155,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BSM/Verwaltungskreisfuehrungsorgan.svg',
      de: 'Verwaltungskreisführungsorgan',
      en: 'Verwaltungskreisführungsorgan',
      fr: 'Organe de gestion du district administratif',
    },
    {
      id: 156,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BSM/Zivilschutz.svg',
      de: 'Zivilschutz',
      en: 'Zivilschutz',
      fr: 'Défense civile',
    },
    {
      id: 157,
      kat: 'formation',
      type: 'Point',
      color: '#0000FF',
      src: 'BABS/Ziviles Fuehrungsorgan.svg',
      de: 'Ziviles Führungsorgan',
      en: 'Ziviles Führungsorgan',
      fr: 'Organe exécutif civil',
    },
    {
      id: 158,
      kat: 'place',
      type: 'Point',
      color: '#0000FF',
      src: 'NTP/NTP.svg',
      de: 'Notfalltreffpunkt',
      en: 'Emergency meeting point',
      fr: 'Point de rencontre d’urgence',
    },
  ];

  public static getSignBySource(src: string): Sign | null {
    for (const sig of Signs.SIGNS) {
      if (sig.src === src) {
        return { ...sig };
      }
    }
    return null;
  }

  public static getSignById(id: number | undefined): Sign | undefined {
    return Signs.SIGNS.find((s) => s.id === id);
  }
}
