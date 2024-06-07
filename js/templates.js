function applyTemplate() {
    const template = document.getElementById('template-select').value;
    const form = document.getElementById('vtx-form');
    const currentCheckboxState = document.getElementById('band-checkbox').checked;
    form.reset();
    document.getElementById('confirmation-checkbox').checked = checkboxState;
    document.getElementById('band-checkbox').checked = currentCheckboxState;
    
    if (template === 'reaper') { 
        document.getElementById('power-state-1').value = '1';
        document.getElementById('power-state-2').value = '3';
        document.getElementById('power-state-3').value = '5';
        document.getElementById('protocol-select').value = '8192';
        document.getElementById('port-select').value = '0';
        document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B CUSTOM  5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable powerlevels 5
vtxtable powervalues 25 100 200 400 600
vtxtable powerlabels 25 200 500 1.5 2.5`;
        
    } else if (template === 'reaper2') { 
        document.getElementById('power-state-1').value = '1';
        document.getElementById('power-state-2').value = '3';
        document.getElementById('power-state-3').value = '5';
        document.getElementById('protocol-select').value = '8192';
        document.getElementById('port-select').value = '0';
        document.getElementById('vtxTable').value = `vtxtable bands 8
vtxtable channels 8
vtxtable band 1 BAND_A   A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BAND_B   B CUSTOM  5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BAND_E   E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 BAND_F   F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 BAND_R   R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable band 6 BAND_H     CUSTOM  5653 5693 5733 5773 5813 5853 5893 5933
vtxtable band 7 BAND_L     CUSTOM  5333 5373 5413 5453 5493 5533 5573 5613
vtxtable band 8 BAND_U     CUSTOM  5325 5348 5366 5384 5402 5420 5438 5456
vtxtable powerlevels 5
vtxtable powervalues 25 100 200 400 600
vtxtable powerlabels 25 200 500 1.5 2.5`;
    }
      else if (template === 'solo') { 
        document.getElementById('power-state-1').value = '1';
        document.getElementById('power-state-2').value = '3';
        document.getElementById('power-state-3').value = '4';
        document.getElementById('protocol-select').value = '2048';
        document.getElementById('port-select').value = '0';
        document.getElementById('vtxTable').value = `vtxtable bands 6
vtxtable channels 8
vtxtable band 1 BAND_A   A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BAND_B   B CUSTOM  5733 5752 5771 5790 5999 5828 5847 5866
vtxtable band 3 BAND_E   E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 AIRWAVE  F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable band 6 LOWRACE  L CUSTOM  5362 5399 5436 5473 5510 5547 5584 5621
vtxtable powerlevels 4
vtxtable powervalues 14 27 30 34
vtxtable powerlabels 25 500 1 2.5`;
        
    } else if (template === 'tank') { 
        document.getElementById('power-state-1').value = '1';
        document.getElementById('power-state-2').value = '3';
        document.getElementById('power-state-3').value = '4';
        document.getElementById('protocol-select').value = '2048';
        document.getElementById('port-select').value = '0';
        document.getElementById('vtxTable').value = `vtxtable bands 6
vtxtable channels 8
vtxtable band 1 BAND_A   A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BAND_B   B CUSTOM  5733 5752 5771 5790 5999 5828 5847 5866
vtxtable band 3 BAND_E   E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 AIRWAVE  F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable band 6 LOWRACE  L CUSTOM  5362 5399 5436 5473 5510 5547 5584 5621
vtxtable powerlevels 4
vtxtable powervalues 14 26 29 32
vtxtable powerlabels 25 400 800 MAX`;        

    } else if (template === 'infinity') { 
        document.getElementById('power-state-1').value = '1';
        document.getElementById('power-state-2').value = '3';
        document.getElementById('power-state-3').value = '5';
        document.getElementById('protocol-select').value = '8192';
        document.getElementById('port-select').value = '0';
        document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B CUSTOM  5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable powerlevels 5
vtxtable powervalues 25 100 200 400 600
vtxtable powerlabels 50 500 1W 2.5 5W`;        

    } else if (template === 'lst') { 
        document.getElementById('power-state-1').value = '1';
        document.getElementById('power-state-2').value = '2';
        document.getElementById('power-state-3').value = '4';
        document.getElementById('protocol-select').value = '8192';
        document.getElementById('port-select').value = '0';
        document.getElementById('vtxTable').value = `vtxtable bands 6
vtxtable channels 8
vtxtable band 1 BOSCAM_A A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B CUSTOM  5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable band 6          L CUSTOM  5362 5399 5436 5473 5510 5547 5584 5621
vtxtable powerlevels 4
vtxtable powervalues 25 1000 2000 3000
vtxtable powerlabels 25 1W 2W MAX`;        

    } else if (template === 'sixty9') { 
        document.getElementById('power-state-1').value = '1';
        document.getElementById('power-state-2').value = '2';
        document.getElementById('power-state-3').value = '4';
        document.getElementById('protocol-select').value = '2048';
        document.getElementById('port-select').value = '0';
        document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E FACTORY 5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917
vtxtable powerlevels 4
vtxtable powervalues 14 20 26 36
vtxtable powerlabels 25 100 400 MAX`;        

    } else if (template === 'mobula7') { 
        document.getElementById('power-state-1').value = '3';
        document.getElementById('power-state-2').value = '4';
        document.getElementById('power-state-3').value = '5';
        document.getElementById('protocol-select').value = '2048';
        document.getElementById('port-select').value = '1';
        // document.getElementById('port-select').disabled = true;
        document.getElementById('vtxTable').value = `vtxtable bands 6
vtxtable channels 8
vtxtable band 1 BOSCAM_A A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E FACTORY 5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917
vtxtable band 6 LOWRACE  L FACTORY 5333 5373 5413 5453 5493 5533 5573 5613
vtxtable powerlevels 5
vtxtable powervalues 10 2 14 20 26
vtxtable powerlabels 0 RCE 25 100 400`; 
    
    } else if (template === 'blitz') { 
        document.getElementById('power-state-1').value = '1';
        document.getElementById('power-state-2').value = '3';
        document.getElementById('power-state-3').value = '4';
        document.getElementById('port-select').value = '0';
        document.getElementById('protocol-select').value = '8192';
        document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B CUSTOM  5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable powerlevels 4
vtxtable powervalues 25 400 1000 2500
vtxtable powerlabels 25 400 1W 2W5`;        
    
} else if (template === 'jhemcu') { 
    document.getElementById('power-state-1').value = '1';
    document.getElementById('power-state-2').value = '4';
    document.getElementById('power-state-3').value = '5';
    document.getElementById('port-select').value = '0';
    document.getElementById('protocol-select').value = '8192';
    document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B CUSTOM  5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E CUSTOM  5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable powerlevels 6
vtxtable powervalues 25 100 200 400 600 1
vtxtable powerlabels 25 400 800 1.5 2.5 0MW`;        
///////////////////////////////////////////
} else if (template === 'longrange') { 
    document.getElementById('power-state-1').value = '1';
    document.getElementById('power-state-2').value = '3';
    document.getElementById('power-state-3').value = '5';
    document.getElementById('port-select').value = '0';
    document.getElementById('protocol-select').value = '2048';
    document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E FACTORY 5705 5685 5665 0 5885 5905 0 0
vtxtable band 4 FATSHARK F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917    
vtxtable powerlevels 5
vtxtable powervalues 0 1 2 3 4
vtxtable powerlabels 250 500 1000 2000 3000`;        

} else if (template === 'raceranger') { 
    document.getElementById('power-state-1').value = '1';
    document.getElementById('power-state-2').value = '2';
    document.getElementById('power-state-3').value = '4';
    document.getElementById('port-select').value = '0';
    document.getElementById('protocol-select').value = '2048';
    document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E FACTORY 5705 5685 5665 5645 5885 5905 5925 5945
vtxtable band 4 FATSHARK F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917    
vtxtable powerlevels 4
vtxtable powervalues 0 1 2 3
vtxtable powerlabels 200 400 800 1600`;        

} else if (template === 'dominator') { 
    document.getElementById('power-state-1').value = '1';
    document.getElementById('power-state-2').value = '2';
    document.getElementById('power-state-3').value = '4';
    document.getElementById('port-select').value = '0';
    document.getElementById('protocol-select').value = '2048';
    document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E FACTORY 5705 5685 5665 0 5885 5905 0 0
vtxtable band 4 FATSHARK F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917    
vtxtable powerlevels 4
vtxtable powervalues 0 1 2 3
vtxtable powerlabels 250 500 1000 2000`;        

} else if (template === 'geprcrad') { 
    document.getElementById('power-state-1').value = '1';
    document.getElementById('power-state-2').value = '3';
    document.getElementById('power-state-3').value = '5';
    document.getElementById('port-select').value = '0';
    document.getElementById('protocol-select').value = '8192';
    document.getElementById('vtxTable').value = `vtxtable bands 5
vtxtable channels 8
vtxtable band 1 BOSCAM_A A CUSTOM  5865 5845 5825 5805 5785 5765 5745 5725
vtxtable band 2 BOSCAM_B B CUSTOM  5733 5752 5771 5790 5809 5828 5847 5866
vtxtable band 3 BOSCAM_E E CUSTOM  5705 5685 5665    0 5885 5905    0    0
vtxtable band 4 FATSHARK F CUSTOM  5740 5760 5780 5800 5820 5840 5860 5880
vtxtable band 5 RACEBAND R CUSTOM  5658 5695 5732 5769 5806 5843 5880 5917
vtxtable powerlevels 5
vtxtable powervalues 25 200 600 1600 2500
vtxtable powerlabels 25 200 600 1.6 2.5

}