import { NextSeo } from 'next-seo'
import Layout from '@/components/layout'
import Image from 'next/image'

import Heroheading from '@/components/heroheading'
import ModulComponent from '@/components/modulcomponent'

export default function Impressum() {
  return (
    <Layout
      url={`https://detailing.glossboss.de/impressum`}
      title='impressum@GLOSSBOSS'
      description='Impressum und Datenschutzerklärung'>
      <div className='prose-li:m-0'>
        <Heroheading>Impressum, Datenschutzerklärung & AGB</Heroheading>
        <p className='font-mono text-center text-sm md:text-lg leading-snug max-w-md lg:max-w-xl m-0 p-0 mx-auto'></p>
        <p>
          Marvin Mieth
          <br />
          Bussardstr. 22
          <br />
          46282 Dorsten
        </p>
        <p>Umsatzsteuer ID: DE815845807</p>
        <p>
          Mobil: <a href='tel:+491703262412'>+491703262412</a>
          <br />
          E-Mail: <a href='mailto:marvin@glossboss.de'>marvin@glossboss.de</a>
          <br />
        </p>
        <br />
        <br />
        <h2>Disclaimer – rechtliche Hinweise</h2>
        § 1 Warnhinweis zu Inhalten
        <br />
        Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit
        größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt
        jedoch keine Gewähr für die Richtigkeit und Aktualität der
        bereitgestellten kostenlosen und frei zugänglichen journalistischen
        Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die
        Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters
        wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen
        Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
        Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des
        Anbieters.
        <br />
        <br />
        § 2 Externe Links
        <br />
        Diese Website enthält Verknüpfungen zu Websites Dritter (externe Links).
        Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der
        Anbieter hat bei der erstmaligen Verknüpfung der externen Links die
        fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen.
        Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter
        hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und
        auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links
        bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link
        liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen
        Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße
        nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige
        externe Links unverzüglich gelöscht.
        <br />
        <br />
        § 3 Urheber- und Leistungsschutzrechte
        <br />
        Die auf dieser Website veröffentlichten Inhalte unterliegen dem
        deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber-
        und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der
        vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
        Rechteinhabers. Dies gilt insbesondere für Vervielfältigung,
        Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe
        von Inhalten in Datenbanken oder anderen elektronischen Medien und
        Systemen. Inhalte und Rechte Dritter sind dabei als solche
        gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe
        einzelner Inhalte oder kompletter Seiten ist nicht gestattet und
        strafbar. Lediglich die Herstellung von Kopien und Downloads für den
        persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
        <br />
        <br />
        Die Darstellung dieser Website in fremden Frames ist nur mit
        schriftlicher Erlaubnis zulässig.
        <br />
        <br />
        § 4 Besondere Nutzungsbedingungen
        <br />
        Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von
        den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle
        ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen
        Einzelfall die besonderen Nutzungsbedingungen.
        <br />
        <br />
        <h2>Datenschutzerklärung:</h2>
        <p>
          <strong>Datenschutz</strong>
          <br />
          Nachfolgend möchten wir Sie über unsere Datenschutzerklärung
          informieren. Sie finden hier Informationen über die Erhebung und
          Verwendung persönlicher Daten bei der Nutzung unserer Webseite. Wir
          beachten dabei das für Deutschland geltende Datenschutzrecht. Sie
          können diese Erklärung jederzeit auf unserer Webseite abrufen.
          <br />
          <br />
          Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im
          Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
          aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt
          werden kann.
          <br />
          <br />
          Die Verwendung der Kontaktdaten unseres Impressums zur gewerblichen
          Werbung ist ausdrücklich nicht erwünscht, es sei denn wir hatten zuvor
          unsere schriftliche Einwilligung erteilt oder es besteht bereits eine
          Geschäftsbeziehung. Der Anbieter und alle auf dieser Website genannten
          Personen widersprechen hiermit jeder kommerziellen Verwendung und
          Weitergabe ihrer Daten.
          <br />
          <br />
          <strong>Personenbezogene Daten</strong>
          <br />
          Sie können unsere Webseite ohne Angabe personenbezogener Daten
          besuchen. Soweit auf unseren Seiten personenbezogene Daten (wie Name,
          Anschrift oder E-Mail Adresse) erhoben werden, erfolgt dies, soweit
          möglich, auf freiwilliger Basis. Diese Daten werden ohne Ihre
          ausdrückliche Zustimmung nicht an Dritte weitergegeben. Sofern
          zwischen Ihnen und uns ein Vertragsverhältnis begründet, inhaltlich
          ausgestaltet oder geändert werden soll oder Sie an uns eine Anfrage
          stellen, erheben und verwenden wir personenbezogene Daten von Ihnen,
          soweit dies zu diesen Zwecken erforderlich ist (Bestandsdaten). Wir
          erheben, verarbeiten und nutzen personenbezogene Daten soweit dies
          erforderlich ist, um Ihnen die Inanspruchnahme des Webangebots zu
          ermöglichen (Nutzungsdaten). Sämtliche personenbezogenen Daten werden
          nur solange gespeichert wie dies für den genannten Zweck (Bearbeitung
          Ihrer Anfrage oder Abwicklung eines Vertrags) erforderlich ist.
          Hierbei werden steuer- und handelsrechtliche Aufbewahrungsfristen
          berücksichtigt. Auf Anordnung der zuständigen Stellen dürfen wir im
          Einzelfall Auskunft über diese Daten (Bestandsdaten) erteilen, soweit
          dies für Zwecke der Strafverfolgung, zur Gefahrenabwehr, zur Erfüllung
          der gesetzlichen Aufgaben der Verfassungsschutzbehörden oder des
          Militärischen Abschirmdienstes oder zur Durchsetzung der Rechte am
          geistigen Eigentum erforderlich ist.
        </p>
        <p>
          <strong>Auskunftsrecht</strong>
          <br />
          Sie haben das jederzeitige Recht, sich unentgeltlich und unverzüglich
          über die zu Ihrer Person erhobenen Daten zu erkundigen. Sie haben das
          jederzeitige Recht, Ihre Zustimmung zur Verwendung Ihrer angegeben
          persönlichen Daten mit Wirkung für die Zukunft zu widerrufen. Zur
          Auskunftserteilung wenden Sie sich bitte an den Anbieter unter den
          Kontaktdaten im Impressum.
        </p>
        <p>
          Quelle: <a href='http://www.juraforum.de'>www.juraforum.de</a>
        </p>
        <p>
          <h2>AGB</h2>
        </p>
        <p>
          Alle zwischen „GLOSSBOSS Detailing“ (im folgenden Anbieter genannt)
          und den Kunden (im folgenden Auftraggeber genannt) abgeschlossenen
          Verträge liegen folgende Allgemeine Geschäftsbedingungen (im folgenden
          AGB genannt) zugrunde: §1 Geltungsbereich der Allgemeinen
          GeschäftsbedingungenFür alle zwischen dem Anbieter und dem
          Auftraggeber abgeschlossenen Verträge gelten unsere AGB. Zu diesen
          zählen Geschäftsbereiche wie Fahrzeugaufbereitung, Fahrzeugwäsche,
          etc. 1.1. Alle Vereinbarungen, die von unseren AGB abweichen bedürfen
          der Schriftform. Von unseren AGB abweichende Vereinbarungen nehmen
          keinen Einfluss auf die Gültigkeit der übrigen Bedingungen. 1.2.
          Änderungen an den AGB sind vorbehalten und müssen einen Monat vor
          Wirksamkeit schriftlich angekündigt werden. 1.3. Wenn eine oder
          mehrere Klauseln bzw. Absätze unwirksam sind, so bleiben die
          restlichen Klauseln und Absätze der AGB weiterhin gültig.
        </p>
        <p>
          §2 Terminvereinbarungen 2.1. Terminvereinbarungen werden im
          rechtlichen Sinne als Auftragserteilung behandelt und werden als
          solche anerkannt. Vor Durchführung der Fahrzeugreinigung/-aufbereitung
          muss der Auftraggeber ein schriftliches Auftragsformular unterzeichnen
          oder alternativ dem Webbasierten Auftragskonfigurator zustimmen, wo
          alle relevanten Daten aufgenommen und gespeichert werden. Dieses ist
          unabhängig von der Terminvereinbarung. 2.2. Terminvereinbarungen
          werden mit Einverständnis von Auftraggeber und Anbieter getroffen.
          Eilaufträge müssen vom Auftraggeber als solche vor Auftragsannahme
          deklariert werden. Eine Auftragsannahme von Eilaufträgen behält sich
          der Anbieter vor, da diese sich nach der Auftragslage richtet.
        </p>
        <p>
          §3 Nichteinhaltung von Terminvereinbarungen 3.1. Die Gültigkeit von
          Terminvereinbarungen besteht bis zum vereinbarten Termin, sofern nicht
          mindestens zwei Werktage vorher von einer Seite der Geschäftsparteien
          aufgekündigt wird. 3.2. Sofern kein erkennbarer Grund für die
          Nichteinhaltung eines Termins erkennbar ist, kann der Anbieter eine
          Kostenpauschale in Höhe von 20% des vereinbarten Preises in Rechnung
          stellen, bzw. geltend machen. 3.3. Das Fahrzeug sollte bei Übergabe
          keine losen Teile aufweisen. Wertsachen oder andere Gegenstände müssen
          vorher entfernt werden. Es können keine Schadenersatzansprüche gegen
          den Anbieter und dessen Mitarbeiter bei fehlenden oder nicht zum
          Fahrzeug gehörenden Teilen oder Wertsachen geltend gemacht werden.
        </p>
        <p>
          §4 Reklamationen 4.1. Die durchgeführten Leistungen des Anbieters
          werden zusammen mit dem Auftraggeber bei Übergabe des Fahrzeuges
          überprüft. Reklamationen können ausschließlich nur nach erbrachter
          Leistung geltend gemacht werden. Der Anbieter hat das ausdrückliche
          Recht zur Nachbesserung, sofern die Reklamation berechtigt ist. 4.2.
          Reklamationen sind vom Geschädigten vor Ort und unverzüglich im
          Beisein des Anbieters schriftlich festzuhalten. 4.3. Reklamationen,
          die sich auf eine Beschädigung am Fahrzeug durch den Anbieter beziehen
          bzw. verursacht sein könnten, müssen unverzüglich fotografisch
          dokumentiert werden. Anderweitig ist eine Anerkennung der Reklamation
          nicht möglich.
        </p>
        <p>
          §5 Haftung und Garantie 5.1. Schadenersatzansprüche seitens des
          Auftraggebers können nur geltend gemacht werden, wenn dem Anbieter
          oder einem seiner Mitarbeiter grobe Fahrlässigkeit oder Vorsatz
          angelastet werden kann. 5.2. Bei Lackschäden, die durch den Anbieter
          verursacht werden und ihren Ursprung in schadhaften Lacken haben, wie
          z.B. durch Steinschlag, Lackabplatzungen, schlecht verarbeiteten
          Lacken, Kratzer, etc., können keine Schadenersatzansprüche gegen den
          Anbieter und dessen Mitarbeiter geltend gemacht werden. 5.3. Bei stark
          verschmutzten Innenausstattungen, die Flecken oder Blessuren
          aufweisen, können leicht aggressive Chemikalien eingesetzt werden.
          Dies kann zu Farbverblassungen und -abweichungen führen. Der
          Auftraggeber muss vor der Unterzeichung des Auftragformulars hierüber
          informiert werden. Wird eine Durchführung dieser Arbeiten dennoch
          gewünscht, wird durch seine Unterschrift auf dem Auftragsformular
          jegliche diesbezügliche Haftung seitens des Anbieters ausgeschlossen.
          5.4. Die Haftung für alle Schäden am Fahrzeug, die vor der
          Fahrzeugaufbereitung an dem betreffenden Fahrzeug vorhanden waren
          (z.B. Karosserieschäden, Kratzer und Dellen, schadhafte Felgen,
          Antennen, loses und schadhaftes Interieur oder Zubehör, welches im
          Vorfeld schlecht bzw. unfachmännisch angebracht wurde, etc.) oder
          durch die Arbeiten am Fahrzeug vergrößert wurden, wird nicht
          übernommen. 5.5. Motor- und Motorenraumwäsche werden nur an
          Kraftfahrzeugen mit einwandfreier Elektrikabdichtung durchgeführt. Mit
          der Auftragserteilung zur Motor- und Motorenraumwäsche bestätigt der
          Auftraggeber die einwandfreie Elektroabdichtung im Motorenraum seines
          Fahrzeugs. Bei Ausfällen übernimmt der Anbieter keinerlei Haftung.
          5.6. Bei empfindlichen Elektrobauteilen (z.B. Alarmanlagen, Auto-HiFi,
          etc.) ist der Auftraggeber verpflichtet, diese im Vorfeld der
          auszuführenden Arbeiten an seinem Fahrzeug dem Anbieter zu melden bzw.
          dies auf dem Auftragsformular schriftlich zu vermerken.
        </p>
        <p>
          §6 Formalitäten und schriftliche Absicherung 6.1. Vor Beginn der
          durchzuführenden Arbeiten am Fahrzeug muss das Auftragsformular vom
          Auftraggeber unterzeichnet werden. Hierzu gehört ggf. eine
          Beschreibung der vorhandenen Schäden am Fahrzeug. Dies dient der
          rechtlichen Absicherung des Auftraggebers, des Anbieters sowie dessen
          Mitarbeiter. 6.2. Der Anbieter behält sich rechtliche Schritte gegen
          den Auftraggeber vor, wenn dieser Schadenersatzansprüche nach
          Abschluss des Auftrages geltend machen möchte, die sich auf bereits
          vor der Ausführung des Auftrages vorhandene Schäden beziehen. 6.3. Mit
          der Unterzeichnung des Formulars bestätigt der Auftraggeber dessen
          Richtigkeit. Zugleich werden durch die Unterzeichnung auch unsere
          Allgemeinen Geschäftsbedingungen (AGB) und die ggf. auf dem
          Auftragsformular festgehaltenen außerordentlichen Vereinbarungen
          akzeptiert und anerkannt. 6.4. Bei mündlichen Vereinbarungen
          akzeptiert der Auftraggeber nach Schlüsselübergabe unsere Allgemeinen
          Geschäftsbedingungen.
        </p>
        <p>
          §7 Zahlungsbedingungen / Zahlungsvereinbarungen 7.1. Unsere Leistungen
          erfolgen grundsätzlich gegen Barzahlung oder nach Vereinbarung auf
          Rechnung. 7.2. Die Zahlungsbedingung lautet: Zahlung sofort nach
          Erhalt der Rechnung ohne Abzug. 7.3. Nach vorheriger mündlicher
          Vereinbarung sind Ausnahmefälle möglich, müssen jedoch auf dem
          Auftragsformular schriftlich festgehalten werden, da diese sonst
          unwirksam werden.
        </p>
        <p>
          §8 Preise / Pauschalpreise 8.1. Die Preise des Anbieters sind im
          Allgemeinen abhängig vom Zustand bzw. vom Verschmutzungsgrad. Alle
          angegebenen Preise, sofern Sie nicht mit dem Auftraggeber abgesprochen
          sind, entsprechen Fahrzeugen mit normalem Verschmutzungsgrad. 8.2.
          Preisangaben auf Informationsunterlagen, sowie der Webseite des
          Anbieters dienen der Orientierung und sind unverbindlich. Der Endpreis
          kann je nach Fahrzeugzustand von den Orientierungspreisen abweichen.
          8.3. Extreme Verschmutzungen wie z.B. Farben, Tierhaare, Fäkalien,
          etc., bei denen eine spezielle Behandlung erforderlich ist, kann ein
          Aufpreis gelten gemacht werden, welcher unabhängig von Pauschalpreisen
          oder Angeboten ist. Aufpreise müssen auf dem Auftragsformular
          schriftlich festgehalten werden. Sollten stärkere Verschmutzungen erst
          während der Reinigung bemerkt bzw. festgestellt werden, so ist der
          Auftraggeber unverzüglich darüber in Kenntnis zu setzen. Eine
          Auftragserteilung gegen Mehrkosten kann hierbei telefonisch erteilt
          werden. 8.4. Die endgültigen Preise der Reinigung bzw. Aufbereitung
          werden vor Beginn der Arbeiten festgelegt und auf dem Auftragsformular
          festgehalten bzw. vermerkt.
        </p>
        <p>
          §9 Fahrzeugüberführung 9.1. Der Anbieter bietet die
          Fahrzeugüberführung (Abholung und Zustellung) als Dienstleistung dem
          Auftraggeber an. Der Preis für die Überführung ist nicht in der
          Aufbereitung, Reinigung enthalten und wird vor Auftragsannahme mit dem
          Auftraggeber abgesprochen. 9.2. Die Abholung erfolgt ausschließlich
          nur von Mitarbeitern des Anbieters. Bei Abholung ist ein
          Übernahmeformular auszufüllen. Dieses beinhaltet Stammdaten des
          Auftraggebers, die durchzuführenden Tätigkeiten sowie den Gesamtpreis.
          Schäden am Fahrzeug sind sofort schriftlich festzuhalten. Siehe §6.
          Gleichzeitig dient dieses als Übernahmebestätigung für den
          Auftraggeber. Die Zustellung erfolgt ebenfalls durch einen Mitarbeiter
          des Anbieters. 9.3. Das Fahrzeug des Auftraggebers ist während der
          Überführung über die Betriebshaftpflichtversicherung des Anbieters
          versichert. Sie beginnt mit der Abholung und endet mit der Übergabe.
        </p>
        <p>
          §10 Sonstiges 10.1. Erfüllungsort ist Dorsten. 10.2. Gerichtsstand ist
          Dorsten. 10.3. Salvatorische Klausel Sollten ein oder mehrere
          Bedingungen rechtsunwirksam werden, so wird die betroffene Klausel
          durch eine andere, die dem angestrebten Zweck möglichst nahe kommt,
          ersetzt. Alle anderen Bedingungen verlieren durch die
          Rechtsungültigkeit ein oder mehrerer Bedingungen nicht ihre
          Gültigkeit. Das UN-Kaufrecht ist ausgeschlossen. Es gilt deutsches
          Recht.
        </p>
      </div>
    </Layout>
  )
}
