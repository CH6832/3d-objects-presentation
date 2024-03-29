/*
3DHOP - 3D Heritage Online Presenter
Copyright (c) 2014-2018, Visual Computing Lab, ISTI - CNR
All rights reserved.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function helpSwitch() {
  if($('#cover').css("display")=='none') {
    $('#cover').css("display", "table");
    $('.panel').css("display", "none");
    $('#help_panel').css("display", "table");
  }
  else{
    $('#cover').css("display", "none");
  }
}

function setInfo(model){
	switch (model) {
        case "Model 1":
			$('#description').html("Marmor, 540/50 v. Chr.<br><br>Der Kopf des Sabouroff wurde angeblich nach seinem früheren Besitzer benannt.<br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum1.pdf'>Dokumentation 'Raum I - Von der Archaik zur Klassik'</a>");
			break;
		case "Model 2":
			$('#description').html("Naxischer Marmor, 560/550 v. Chr.<br><br>Die Kore, von der nur der Oberkörper mit Kopf und linkem Arm erhalten sind, hält einen Granatapfel in der Hand. Sie gilt als die früheste der Mädchenstatuen. <br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum1.pdf'>Dokumentation 'Raum I - Von der Archaik zur Klassik'</a>");
			break;
		case "Model 3":
			$('#description').html("Unbekanntes Material<br><br>Keine genauere Beschreibung vorhanden.");
			break;
		case "Model 4":
			$('#description').html("Pentelischer Marmor, um 460/450 v. Chr.<br><br>Vormals Ince Blundell Hall, jetzt Liverpool, Museum.<br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum2.pdf'>Dokumentation 'Raum II - Die Zeit der Klassik'</a>");
			break;
		case "Model 5":
			$('#description').html("Römische Marmarokopie eines Bronzeoriginals, 420/10 v. Chr.<br><br>Eines der letzten Werke Polyklets war die Statue eines jungen Mannes in langsamer Bewegung nach vorne: der sog. Dresdener Knabe. Von dieser Wiederholung stammt der Kopf in der Sammlung. <br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum2.pdf'>Dokumentation 'Raum II - Die Zeit der Klassik'</a>");
			break;
		case "Model 6":
			$('#description').html("Marmor, 4. Jh. v. Chr.<br><br>Unklarer Inhalt<br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum1.pdf'>Dokumentation 'Raum I - Von der Archaik zur Klassik'</a>");
			break;
		case "Model 7":
			$('#description').html("Kykladischer Marmor, 560/50 v. Chr.<br><br>Keine genauere Beschreibung vorhanden.");
			break;
		case "Model 8":
			$('#description').html("Pentelischer Marmor, um 480 v. Chr.<br><br>Der auf einem Pfeiler daneben aufgestellte blonde Kopf (benannt nach den beim Fund noch wahrnehmbaren Farbspuren im Haar) stammt ebenfalls aus dem sog. Perserschutt. Er zeigt noch deutlicher als der Kritiosknabe den Ernst, welcher von nun an häufig in den Gesichtern der Statuen zu beobachten ist. Zudem saß der Kopf nicht gerade ausgerichtet auf dem Leib, sondern war leicht geneigt und nach rechts gewendet.<br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum2.pdf'>Dokumentation 'Raum II - Die Zeit der Klassik'</a>");
			break;
		case "Model 9":
			$('#description').html("Römische Marmornachbildung, 438 v. Chr.<br><br>Die Athena Lenormant wurde 1859 nahe dem Pnyx-Hügel in Athen gefunden und ein Jahr später von François Lenormant als kleine Nachbildung der Athena Parthenos des Phidias erkannt. Nach Lenormant erhielt das 41 Zentimeter hohe Stück aus pentelischem Marmor auch seinen Beinamen. <br><br>Heute befindet sich die Statuette im <a href='https://www.namuseum.gr/en/'>Archäologisches Nationalmuseum Athen</a> unter der Inventarnummer 128 <br><br>Quelle: <a href='https://de.wikipedia.org/wiki/Athena_Lenormant'>Wikipedia</a>");
			break;
		case "Model 10":
			$('#description').html("Unbekanntes Material<br><br>Keine genauere Beschreibung vorhanden.");
			break;
		case "Model 11":
			$('#description').html("Parischer Marmor, um 520 v. Chr.<br><br>Kopf vom alten Athenatempel auf der Akropolis von Athen. <br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum1.pdf'>Dokumentation 'Raum I - Von der Archaik zur Klassik'</a>");
			break;
		case "Model 12":
			$('#description').html("Bronze, 520/10 v. Chr.<br><br>Keine genauere Beschreibung vorhanden.")
			break;
		case "Model 13":
			$('#description').html("Römische Marmorkopie des Bronzeoriginals, 477/476 v. Chr.<br><br>ältester griechischer Prosaschriftsteller, 6. Jahrhundert v. Chr.; Verfasser einer in Bruchstücken erhaltenen Kosmogonie (Weltentstehungslehre); lehrte die Unsterblichkeit der Seele.<br><br>Quelle: <a href='https://www.wissen.de/lexikon/pherekydes-von-syros'>Lexikoneintrag</a>");
			break;
		case "Model 14":
			$('#description').html("Marmor, um 490 v. Chr.<br><br>keine weiteren Angaben vorhanden<br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum1.pdf'>Dokumentation 'Raum I - Von der Archaik zur Klassik'</a>");
			break;
		case "Model 15":
			$('#description').html("Pentelischer Marmor, um 440/432 v. Chr.<br><br>Der Frauenkopf, benannt nach dem früheren Besitzer Weber-Laborde, gehörte zu einer Gestalt auf dem Westgiebel mit der Darstellung des Kampfes zwischen der siegreichen Athena und Poseidon. <br><br>Quelle: <a href='http://gipsmuseum.uni-graz.at/pdf/raum2.pdf'>Dokumentation 'Raum II - Die Zeit der Klassik'</a>");
			break;
		case "Model 16":
			$('#description').html("Marmor <br><br>Platon lebte von 427-347 v. Chr. in Athen. Aus attischem Adel stammend, schloss er sich dem Kreis um Sokrates an, der ihn entscheidend prägte. Nach dessen Tod (399 v. Chr.) begab er sich auf Reisen und hielt sich u.a. am Hof des Tyrannen Dionysios I in Syrakus auf. Nach seiner Rückkehr gründete Platon in Athen seine Schule im Hain des Akademos (= Akademie). Von weiteren Reisen nach Syrakus an den Hof des Dionysios II kehrte er enttäuscht zurück, da er einsehen musste, wie gering die Möglichkeiten der Philosophie waren, auf die Führung des Staates Einfluss zu nehmen.<br><br>Quelle: <a href='http://viamus.uni-goettingen.de/fr/e/schule/g/a_02/09'>Archäologisches Institut Göttingen</a>");
			break;
		default:
			$('#description').html("...");
			break;s
	}
}

function contentflowInit() {
	myNewFlow = new ContentFlow('contentflow', { 
		reflectionHeight: 0.5, 
		circularFlow: false, 
		scaleFactor: 0.65,
		scaleFactorLandscape: 1.5,
		keys:{
			13: function () {this.conf.onclickActiveItem(this._activeItem) }, 	// return/enter key
			37: function () { this.moveTo('pre') },         					// left arrow
			38: function () { this.moveTo('visibleNext') }, 					// up arrow
			39: function () { this.moveTo('next') },        					// right arrow
			40: function () { this.moveTo('visiblePre') }   					// down arrow
		},
		onclickActiveItem: function (obj) {
		},
		onMakeActive: function (obj) {
			$('#handiwork').text(obj.item.title);

			setInfo(obj.item.id);

			presenter.setInstanceVisibility(HOP_ALL, false, false); 
			presenter.setInstanceVisibilityByName(obj.item.id, true, true); 
			presenter.resetTrackball();

			(function($){
					$(".scroll").mCustomScrollbar({
						verticalScroll:true,
						theme:"light",
						advanced:{
							updateOnContentResize: true
						}
					});
			})(jQuery);

		}
	});
}

function fullscreenSwitch() {

  $('.flow').css('width',$('.flow').width());

  if($('#full').css("visibility")=="visible"){
    if (window.navigator.userAgent.indexOf('Trident/') < 0) enterFullscreen();
  }
  else{
    if (window.navigator.userAgent.indexOf('Trident/') < 0) exitFullscreen();
  }
}
