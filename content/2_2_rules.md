# Regeln von Microinteractions

Sobald eine Microinteraction initiiert wurde, definieren Regeln wie sie ablaufen wird und welche Funktion sie hat. Während in einem (hypothetischen) System ohne Regeln alles und zu jeder Zeit möglich ist, bedeuten Regeln, dass Aktionen eingeschränkt sind – das heißt entweder gar nicht möglich oder nur unter bestimmten Umständen. Die Regeln eine Microinteraction schränken also möglichen Aktionen eines Interfaces ein oder ermöglichen sie nur unter Voraussetzungen. Hierbei erweitern sie die Regeln der physischen Welt und der genutzten Mensch-Maschine-Schnittstelle.
Nutzer sollten Regeln nicht kennen oder mühevoll lernen müssen um interagieren zu können. Viele Regeln die uns alltäglich umgeben, wie Schwerkraft oder gesellschaftliche Konventionen nehmen wir kaum bewusst wahr. Regeln für Microinteractions sollten sich ebenfalls natürlich anfühlen und nicht den Eindruck auf Nutzer erwecken, sie schränkten deren Möglichkeiten ein. Im besten Fall kanalisieren sie die 'Konversation' zwischen Mensch und Maschine, geben ihr eine Richtung und führen so zum Ziel ohne überhapt wahrgenommen zu werden.

> What you're trying to create with rules is a simplified, nontechnical model of how the microinteraction operates.
> <cite>Dan Saffer^[Saffer, Dan: Microinteractions - Designing with Details (S. 52), O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]</cite>

Bevor Regeln erarbeitet werden, sollte das _Ziel_ der Microinteraction klar definiert werden. Das Ziel eines Login-Formulars ist nicht die Eingabe von Benutzername und Passwort, sondern die Anmeldung des Nutzers. Ein Ziel sollte für Nutzer immer _nachvollziehbar_ ("Ich weiß warum ich das tue") und erreichbar ("Ich weiß, das ich es tun kann") sein.^[vgl. Saffer, Dan: Microinteractions - Designing with Details (S. 52f), O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]

Es empfiehlt sich, zwischen zwei Arten von Regelnwerken zu unterscheiden: Das _komplette Regelwerk_ besteht sämtlichen zur Implementierung nötige Details. Während das _einfache Regelwerk_ ein simplifiziertes Modell der direkt nutzerrelevanten Regeln beinhaltet. Ersteres deckt Sonderfälle ab, wie Einhaltung von Konventionen verschiedener Betriebssysteme oder Adaptionen an verschiedene Bildschirmgrößen und kann technische Details beinhalten, wie z. B. "Auslöseschwelle bei 50% der Bildschirmbreite, jedoch maximal 150dp".
Generell sollten Regeln möglichst leicht verständlich sein, dies ermöglicht nicht nur eine bessere Nutzererfahrung, sondern auch die reibungslose Zusammenarbeit bei der Entwicklung. Ersteres beschreibt die Komplexität der technischen Ausführung, zweiteres die gefühlte Komplexität für Nutzer.

Da Microinteractions sehr unterschiedlich sein können, werden sich auch deren Bestandteile von Regeln deutlich unterscheiden, meist beinhalten sie jedoch^[aus: Saffer, Dan: Microinteractions - Designing with Details (S. 53f) O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]:

* wie die Microinteraction auf den aktivierten [Trigger](/triggers) reagiert
* welche Kontrolle ein Nutzer über eine andauernde Microinteraction hat
* die logische und zeitliche Abfolge der stattfindenden Aktionen
* welche Daten genutzt werden, und woher diese kommen
* die Einstellungen und Parameter von Algorithmen
* den momentanen [Modus](/loops-and-modes) der Microinteraction
* ob und wie oft sich die Microinteraction [wiederholt](/loops-and-modes)
* was passiert, nachdem die Microinteraction beendet wurde

Regeln sind unsichtbar, ein Nutzer kann diese ausschlließlich durch die gegebene [Rückmeldung](/feedback) erlernen. Nicht immer sind Regeln in ihrer Gänze für Nutzer erschließbar, häufig unterscheidet sich wie ein Nutzer _glaubt_ funktioniere etwas deutlich von dem wie es tatsächlich funktioniert. Bei der Konzipierung sollte daher möglichst auf dem Nutzer bereits bekannte Regeln aufgebaut werden. Da Nutzern die Regeln der physischen Welt wohlbekannt sind, sollte auch in digitalen Produkten auf diesen aufgebaut werden – mehr dazu im Kapitel [Skeumorphismus](/skeuomorphism).

### Regeln am Beispiel einer Lampe

Die Regeln eines Lichtschalters bilden die wohl grundlegendendste Microinteraction ab. Sie lassen sich jedoch durch weitere Regeln ergänzen, ein Dimmer könnte die Helligkeit ändern, eine Zeitschaltuhr oder ein Bewegungssensor könnte das Licht automatisch an und aus schalten.

##### Regeln eines simplen Lichtschalters:

* Schalter auf _ein_ --> Licht _an_
* Schalter auf _aus_ --> Licht _aus_

##### Beispiel für Regeln eines Lichtschalters mit Dimmer:

* Drehregler auf Stufe 0 --> Licht _aus_
* Drehregler auf Stufe 1-9 --> Licht _an_
* Wenn _an_: Helligkeit entspricht Stufe, wobei Stufe 1 am wenigsten hell und Stufe 9 am hellsten ist

##### Beispiel für Regeln einer von Bewegungssensor gesteuerten Beleuchtung:

Tag = Zwischen 8:00 und 18:00 Uhr
Nacht = Zwischen 18:00 und 08:00 Uhr

* Zustand A:
  * Licht ist aus
  * Nachts: überprüfe alle 5 Sekunden ob Bewegung erkannt
  * Wenn Bewegung erkannt: wechsle zu Zustand B
* Zustand B:
  * Licht ist an
  * Alle 5 Sekunden: überprüfe ob Bewegung erkannt
  * Wenn keine Bewegung erkannt für 10 Zyklen: wechsle zu Zustand A

Schon diese einfachen Regeln erfordern einigen Aufwand in Konzeption und Implementierung. Beispielsweise darf die Einschränkung der Uhrzeit nicht in Zusand B Anwendung finden, hier könnte sie dazu führen, dass das Licht dauerhaft eingeschaltet bleibt, wenn die 10 Zyklen auf den Übergang zwischen Tag und Nacht fallen. Wenn man nun noch manuelle Schalter, Helligkeitssensoren oder mehrere Beleuchtungszonen einbezieht, werden die Regeln weitaus komplexer.

<figure class="content-thin">
  <img data-src="/images/rules/flowchart.jpg">
  <figcaption>
    Mit Hilfe eines Flowcharts können Regeln visualisiert werden, so können Ausnahmefälle früh erkannt und Fehler vermieden werden. <!-- XXXX better example -->
    <sup><a href="https://www.nngroup.com/articles/wireflows/">Bildquelle</a></sup>
  </figcaption>
</figure>

### Komplexität, Kontrolle und Automatisierung

Larry Tesler, [Erfinder](/history) der heute üblichen Copy&Paste-Microinteraction formulierte das 'Gesetz der Erhaltung von Komplexität', das besagt, dass für jedes System ein gewisses Maß an Komplexität besteht, das nicht weiter Reduziert werden kann[Lawsofux.com: Tesler's Law](https://lawsofux.com/teslers-law). 
Um die Komplexität für einen Nutzer dennoch weiter zu reduzieren, können ihm Entscheidungen vom Gerät abgenommen werden. Damit einher geht jedoch auch die Kontrolle des Nutzers verloren. 
Ein Interface nötige Eingaben reduzieren, in dem das Nutzeraktionen vorhergesehen werden und wahrscheinliche Schritte automatisch ausgeführt werden. Die Google-Suche zeigt beispielsweise schon Ergebnisse an, bevor die Eingabe mit <kbd>⏎</kbd> bestätigt wurde. 
Die Benutzung einer Microinteraction sollte möglichst einfach gehalten werden, dies kann teilweise durch auch intelligente Voreinstellungen erreicht werden. So wird Komplexität reduziert ohne Nutzern komplett die Kontrolle zu nehmen. Die Balance zwischen möglicher Kontrolle durch den Nutzer und Einfachheit ist stark abhängig von Produkt und Nutzergruppe. Beispiel für ein 'smart default' wäre etwa die automatische Auswahl des Landes in einem Formular, basierend auf dem Standort des Nutzers. 

<figure class="content-thin">
  <img data-src="/images/rules/slack-magic-link.jpg">
  <figcaption>
    Das Ziel, den Nutzer anzumelden, kann hier auch ohne Eingabe eines Passwortes erreicht werden: Der 'magic link' in der E-Mail von Slack muss einfach geöffnet werden, um die Anmeldung abzuschließen.
    <sup><a href="http://joelcalifa.com/blog/patronizing-passwords/">Bildquelle</a></sup>
  </figcaption>
</figure>

Hersteller versuchen oft, mehr Komfort durch mehr Automatisierung zu schaffen. Doch wenn dadurch mit bekannten Regeln gebrochen wird, kann dies schnell zum Unmut der Nutzer führen. So mehrfach geschehen bei Apple: Mit OS X 10.7 wurden mit Einfuhrung des automatischen Speichern von Dateien die Regeln so sehr geändert, dass Nutzer äußerst verwirrt waren und sogar Daten verloren gingen.^[Regeln von 'Speichern unter' in OSX 10.7 nachzulesen in: Saffer, Dan: Microinteractions - Designing with Details (S. 49ff), O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]
Mit iOS 11.2 hat hat Apple Ende 2017 die Regeln der Wifi-, Blothooth- und 'Flugmodus'-Schnelleinstellungen verändert. Bisher schaltete der Flugmodus sämtliche Funkverbindungen ab und lies diese ausgeschaltet, bis sie manuell wieder aktiviert wurden. Die Wifi- und Bluetooth-Buttons verhielten sich ähnlich. 
Die neuen Regeln sind nicht komplett druchschaubar, aber nun kann unter Umständen WLAN oder Bluetooth im Flugmodus angeschaltet bleiben. Außerdem deaktiviert dieser sich nachts um Mitternacht von selbst.^[[Neues in iOS 11.2 - Apples Flugmodus schaltet WLAN nicht immer ab - Golem.de](https://www.golem.de/news/neues-ios-11-2-apples-flugmodus-schaltet-wlan-nicht-immer-ab-1712-131582.html)] Das 'Ausschalten' von Wifi bzw. Bluetooth bewirkt nicht wirklich eine Abschaltung, sondern deaktiviert nur einige Funktionen – Verbindungen zu Apple Watch oder die Dateiübertragung per Airdrop funktionieren weiterhin, obwohl diese bei abgeschaltetem Wifi/Bluetooth technisch nicht möglich sein sollten.
Zudem ist das [Feedback](/feedback) an Nutzer inkonsistent: abgeschaltete Funktionen werden teilweise durch ein grauen Hintergrund, teilweise durch ein druchgestriches Symbol angezeigt.^[[Apple iOS 11.2 - Wer WLAN und Bluetooth abschaltet, benutzt es weiter - Golem.de](https://www.golem.de/news/apple-ios-11-wer-wlan-und-bluetooth-abschaltet-benutzt-es-weiter-1709-130177.html)]^[[Wi-Fi, Bluetooth, And Airplane Mode Controls Are A Confusing Mess In iOS 11 - Forbes.com](https://www.forbes.com/sites/anthonykarcz/2017/09/22/wi-fi-bluetooth-and-airplane-mode-controls-are-a-confusing-mess-in-ios-11/)]
Vorhandene Regeln können (mit Bedacht) geändet werden, doch je grundlegener eine Interaktion, desto wahrscheinlicher ist es, damit Nutzer zu verärgern. Im Fall von Apple kam beide male hinzu, dass die neuen Regen nicht klar kommuniziert wurden und daher Nutzer verwirrten.


> „Dinge, die anders gemacht werden, um einfach nur anders zu sein, sind selten besser, aber das, was gemacht wird, um besser zu sein, ist fast immer anders.”
> <cite>Dieter Rams, 1993</cite>


### Definitiv unvollständige Checkliste für die Gestaltung von Regeln:

* Welche Regeln gelten für [systemseitige Trigger](/triggers)? Unter welchen Bedingugen werden sie ausgelöst?
* Welche Eingabemöglichkeiten nutzt das Interface und wie werden Eingaben interpretiert?
* Welche Begrenzungen haben Eingabemöglichkeiten? z. B. im Eingabefeld für Kreditkartennummer können nur Zahlen eingegeben werden
* Welche Ausgabemöglichkeiten nutzt das Interface?
* Welche Daten stehen zur Verfügung und wie werden sie genutzt?
* Wie beeinflussen 'statische' Informationen wie die eingestellte Sprache oder genutzter Browser können die Regeln?
* Welche Status können Interface-Elemente einnehmen? (initial, aktiv, verändert, ..)
* Können sich Regeln gegenseitig beeinflussen? Gibt es Prioritäten, also höhere Wichtigkeit mancher Regeln?
* Werden Regeln geändert oder könnten als geänderte Regeln wahrgenommen werden? Wie kann der Übergang zu neuen Regeln möglichst Reibungslos ablaufen?
* Sind die Regeln technisch umsetzbar? Ist der Aufwand angemessen? 
* Kann das Ziel auch auf andere Weise erreicht werden?



